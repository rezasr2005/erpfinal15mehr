"""Package committed source for local preview; excludes previous archives and secrets."""
import argparse
import csv
import hashlib
import io
import subprocess
import zipfile
from pathlib import Path

repo = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output', default='releases/kavian-local-preview.zip')
args = parser.parse_args()
out = repo / args.output
out.parent.mkdir(parents=True, exist_ok=True)

def git(*argv):
    return subprocess.check_output(['git', *argv], cwd=repo)

commit = git('rev-parse', 'HEAD').decode().strip()
paths = git('ls-tree', '-r', '--name-only', '-z', commit).decode().split('\0')
manifest = io.StringIO()
writer = csv.writer(manifest)
writer.writerow(['path', 'bytes', 'sha256'])
count = 0
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as archive:
    for name in paths:
        if not name or name.startswith('releases/') or name.endswith('.zip'):
            continue
        parts = Path(name).parts
        if any(part in {'.git', 'node_modules', '.next', '.pnpm-store'} for part in parts):
            continue
        if any(part == '.env' or (part.startswith('.env.') and part != '.env.example') for part in parts):
            continue
        data = git('show', f'{commit}:{name}')
        archive.writestr(f'kavian/{name}', data)
        writer.writerow([name, len(data), hashlib.sha256(data).hexdigest()])
        count += 1
    archive.writestr('kavian/MANIFEST.csv', manifest.getvalue())
    archive.writestr('kavian/VERSION.txt', f'Repository: https://github.com/rezasr2005/erpfinal15mehr\nBranch: main\nSource commit: {commit}\n')

with zipfile.ZipFile(out) as archive:
    assert archive.testzip() is None
    for row in csv.DictReader(io.StringIO(archive.read('kavian/MANIFEST.csv').decode())):
        data = archive.read(f'kavian/{row["path"]}')
        assert len(data) == int(row['bytes'])
        assert hashlib.sha256(data).hexdigest() == row['sha256']
checksum = hashlib.sha256(out.read_bytes()).hexdigest()
Path(str(out) + '.sha256').write_text(f'{checksum}  {out.name}\n')
print(f'Validated {count} files; source commit {commit}; archive {out.name} ({out.stat().st_size} bytes)')
