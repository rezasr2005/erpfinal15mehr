#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "$0")/source"
if ! command -v node >/dev/null || ! node -e 'const [major,minor]=process.versions.node.split(".").map(Number);process.exit(major>22 || (major===22 && minor>=12) ? 0 : 1)'; then
  echo "Install Node.js 22.12 or newer, then run this file again." >&2
  exit 1
fi
if [[ ! -f apps/web/.env.local ]]; then
  cp apps/web/.env.example apps/web/.env.local
fi
npx --yes pnpm@11.19.0 install --frozen-lockfile
echo "Open http://localhost:3000/fa or http://localhost:3000/en. Press Ctrl+C to stop."
npx --yes pnpm@11.19.0 --filter @kavian/web dev --hostname 127.0.0.1
