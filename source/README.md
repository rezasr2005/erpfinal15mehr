# Kavian Platform

Foundation repository for the bilingual digital platform of **Holding Foolad Kavian Sepanta**.

## Architecture

- `apps/web`: Next.js public website + initial admin shell
- `apps/api`: NestJS modular API
- `packages/*`: shared UI, types, validation and configuration
- `infrastructure/*`: deployment and local infrastructure scaffolding

## Requirements

- Node.js 22.12+
- pnpm
- Docker (recommended for local PostgreSQL)

## Local setup

1. Copy `.env.example` to `.env`.
2. Copy `apps/api/.env.example` to `apps/api/.env`.
3. Copy `apps/web/.env.example` to `apps/web/.env.local`.
4. Start PostgreSQL:

   ```bash
   docker compose --env-file .env -f infrastructure/docker/compose.yml up -d
   ```

5. Install dependencies:

   ```bash
   pnpm install
   ```

6. Generate Prisma Client:

   ```bash
   pnpm --filter @kavian/api prisma:generate
   ```

7. Start both applications:

   ```bash
   pnpm dev
   ```

## Local checks

- Website: `http://localhost:3000/fa`
- English shell: `http://localhost:3000/en`
- Admin shell: `http://localhost:3000/admin`
- API health: `http://localhost:4000/api/v1/health`
- Database health: `http://localhost:4000/api/v1/health/database`

> The initial foundation intentionally contains no production business data or hard-coded inventory/prices.
