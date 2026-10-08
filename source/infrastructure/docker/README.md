# Local PostgreSQL

From the repository root:

```bash
docker compose --env-file .env -f infrastructure/docker/compose.yml up -d
```

The default local connection string used by the API is:

```text
postgresql://kavian:kavian@localhost:5432/kavian
```

Production credentials must never reuse these defaults.
