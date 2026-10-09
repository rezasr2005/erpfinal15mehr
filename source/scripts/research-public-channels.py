#!/usr/bin/env python3
"""Capture public company-channel posts for manual editorial review.

No login, sending, automatic pricing changes, or database writes. Uses the
inherited network proxy and Python's default TLS verification.
"""
import argparse
import concurrent.futures
import datetime
import html
import json
from pathlib import Path
import re
import urllib.request

CHANNELS = (
    "Fooladkaviansepanta97",
    "kaviankhavarshahr403",
    "fooladkavianshemsh",
)


def plain_text(fragment):
    fragment = re.sub(r"<br\s*/?>", "\n", fragment, flags=re.I)
    return html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()


def fetch_channel(channel, before):
    url = f"https://t.me/s/{channel}"
    if before is not None:
        url += f"?before={before}"
    request = urllib.request.Request(url, headers={"User-Agent": "Kavian-public-source-review/1.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        document = response.read().decode("utf-8")
    posts = []
    for block in re.split(r'<div class="tgme_widget_message_wrap', document)[1:]:
        identity = re.search(r'data-post="([^"]+)"', block)
        if identity is None:
            continue
        post_id = identity.group(1)
        published = re.search(r'<time datetime="([^"]+)"', block)
        captions = re.findall(r'<div class="tgme_widget_message_text[^>]*>(.*?)</div>', block, re.S)
        images = re.findall(r'background-image:url\([\'\"]?(https[^)\'\"]+)', block)
        posts.append({
            "post": post_id,
            "sourceUrl": f"https://t.me/{post_id}",
            "publishedAt": published.group(1) if published else None,
            "text": "\n".join(plain_text(caption) for caption in captions),
            "imageUrls": list(dict.fromkeys(html.unescape(image) for image in images)),
        })
    if not posts:
        raise ValueError("Public preview returned no readable posts; inspect access or HTML changes.")
    return {"channel": channel, "previewUrl": url, "posts": posts}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True, help="Local JSON evidence path, e.g. /tmp/kavian-sources.json")
    parser.add_argument("--channel", choices=CHANNELS, action="append", help="Defaults to all three channels")
    parser.add_argument("--before", type=int, help="Read older public posts before this message ID (single-channel only)")
    args = parser.parse_args()
    channels = list(dict.fromkeys(args.channel or CHANNELS))
    if args.before is not None and (args.before <= 0 or len(channels) != 1):
        parser.error("--before requires a positive ID and exactly one --channel")
    report = {
        "fetchedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "scope": "Public Telegram web previews; not a full channel history. Image URLs may expire. Captions do not transcribe posters. Manually inspect media, dates, units, validity and conflicting versions before updating the site.",
        "channels": [],
        "errors": [],
    }
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        jobs = {executor.submit(fetch_channel, channel, args.before): channel for channel in channels}
        for job in concurrent.futures.as_completed(jobs):
            channel = jobs[job]
            try:
                result = job.result()
                report["channels"].append(result)
                print(f"{channel}: {len(result['posts'])} public posts captured")
            except Exception as error:
                report["errors"].append({"channel": channel, "error": str(error)})
                print(f"{channel}: could not capture public posts: {error}")
    report["channels"].sort(key=lambda item: item["channel"])
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return 1 if report["errors"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
