#!/usr/bin/env python3
"""Capture user-selected public steel sources for editorial review, without changing the site."""
import argparse
import concurrent.futures
import datetime
import hashlib
import html
import json
from pathlib import Path
import re
import urllib.parse
import urllib.request

SOURCES = {
    'rebar': 'https://esfahanahan.com/steel/rebar/',
    'sheet': 'https://esfahanahan.com/steel/قیمت-ورق-سیاه/',
    'billet': 'https://esfahanahan.com/product/شمش-فولاد/',
    'sponge': 'https://esfahanahan.com/steel/آهن-اسفنجی/',
    'news': 'https://esfahanahan.com/news/',
    'telegram': 'https://t.me/s/irsteelnews',
}


def plain(fragment):
    return html.unescape(re.sub(r'<[^>]+>', ' ', re.sub(r'<br\s*/?>', '\n', fragment, flags=re.I))).strip()


def parse_prices(document):
    rows = []
    for match in re.finditer(r'<table\b[^>]*>.*?</table>', document, re.S):
        dates = re.findall(r'<time[^>]*dateTime="([^"]+)"', document[:match.start()])
        table_rows = re.findall(r'<tr\b[^>]*>.*?</tr>', match[0], re.S)
        headers = [plain(x) for x in re.findall(r'<th\b[^>]*>(.*?)</th>', table_rows[0], re.S)] if table_rows else []
        price_index = next((i for i, header in enumerate(headers) if 'قیمت' in header), None)
        if price_index is None:
            continue
        for index, row in enumerate(table_rows[1:], 1):
            link = re.search(r'<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>', row, re.S)
            cells = re.findall(r'<td\b[^>]*>(.*?)</td>', row, re.S)
            if not link or '/product/' not in link[1] or len(cells) <= price_index:
                continue
            price = re.search(r'\b\d{1,3}(?:,\d{3})+\b', plain(cells[price_index]))
            details = plain(table_rows[index + 1]) if index + 1 < len(table_rows) and 'colspan=' in table_rows[index + 1].lower() else ''
            rows.append({'name': plain(link[2]), 'sourceUrl': urllib.parse.urljoin('https://esfahanahan.com', link[1]), 'date': dates[-1] if dates else None, 'time': dates[-2] if len(dates) > 1 else None, 'amountIRR': int(price[0].replace(',', '')) if price else None, 'priceHeader': headers[price_index], 'cells': [plain(x) for x in cells], 'details': details})
    return rows


def parse_posts(document):
    posts = []
    for block in re.split(r'<div class="tgme_widget_message_wrap', document)[1:]:
        identity = re.search(r'data-post="([^"]+)"', block)
        date = re.search(r'<time datetime="([^"]+)"', block)
        if identity:
            texts = re.findall(r'<div class="tgme_widget_message_text[^>]*>(.*?)</div>', block, re.S)
            text = '\n'.join(plain(x) for x in texts)
            posts.append({'sourceUrl': f'https://t.me/{identity[1]}', 'publishedAt': date[1] if date else None, 'textPreview': text[:80], 'textLength': len(text), 'textSha256': hashlib.sha256(text.encode('utf-8')).hexdigest()})
    if not posts:
        raise ValueError('No readable public posts; check source access or markup.')
    return posts


def fetch(source):
    name, original_url = source
    url = urllib.parse.quote(original_url, safe=':/?=&%')
    request = urllib.request.Request(url, headers={'User-Agent': 'Kavian-market-source-review/1.0'})
    with urllib.request.urlopen(request, timeout=35) as response:
        body = response.read()
    document = body.decode('utf-8')
    result = {'id': name, 'url': original_url, 'sha256': hashlib.sha256(body).hexdigest()}
    if name == 'telegram':
        result['posts'] = parse_posts(document)
    elif name != 'news':
        result['rows'] = parse_prices(document)
        if not result['rows']:
            raise ValueError('No readable price rows; check source markup.')
    else:
        result['articleLinks'] = list(dict.fromkeys(html.unescape(x) for x in re.findall(r'href="(https://esfahanahan.com/news/[^"#]+)"', document)))
        if not result['articleLinks']:
            result['note'] = 'No readable dated article list was present in the fetched HTML; use the source directly. Selected site news uses the Telegram source.'
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    report = {'fetchedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'scope': 'Public source snapshot for manual review. Not live prices or confirmed Kavian inventory. Dates, units and tax must be verified before publication.', 'sources': [], 'errors': []}
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        jobs = {pool.submit(fetch, pair): pair[0] for pair in SOURCES.items()}
        for job in concurrent.futures.as_completed(jobs):
            try:
                report['sources'].append(job.result())
            except Exception as error:
                report['errors'].append({'source': jobs[job], 'error': str(error)})
    report['sources'].sort(key=lambda source: source['id'])
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({'captured': len(report['sources']), 'errors': report['errors']}, ensure_ascii=False))
    return 1 if report['errors'] else 0


if __name__ == '__main__':
    raise SystemExit(main())
