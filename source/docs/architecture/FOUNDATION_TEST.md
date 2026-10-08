# Foundation verification status

## Verified in the build workspace

- Repository structure is internally consistent.
- All package.json files parse successfully.
- Docker Compose YAML parses successfully.
- Locale routing foundation exists for `fa` and `en`.
- Admin has an independent root layout and `noindex` metadata.
- API prefix is `/api/v1`.
- API validation and CORS foundation are enabled.
- Prisma 7 uses the `prisma-client` generator with generated source under `src/generated/prisma`.
- PostgreSQL adapter wiring and database health endpoint are present.
- Local PostgreSQL Compose service and healthcheck are present.
- App-specific environment templates are present.
- ESLint configuration exists for both web and API.

## Runtime checks to run on a machine with registry and Docker access

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local

docker compose --env-file .env -f infrastructure/docker/compose.yml up -d
pnpm install
pnpm --filter @kavian/api prisma:generate
pnpm typecheck
pnpm lint
pnpm build
pnpm dev
```

Then verify:

- `http://localhost:3000/fa`
- `http://localhost:3000/en`
- `http://localhost:3000/admin`
- `http://localhost:4000/api/v1/health`
- `http://localhost:4000/api/v1/health/database`

## Environment limitation during this verification

The execution environment used for this verification did not provide Docker and could not resolve `registry.npmjs.org`, so dependency installation and live runtime/build execution could not be completed here. Those checks remain mandatory before feature development.
