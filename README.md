# InventX Monorepo

Local-first dev environment for web, mobile, and API.

## Prereqs
- Node 18+
- Docker (for Postgres)

## Setup
1. Start Postgres:
   ```bash
   docker compose up -d
   ```
2. Install deps at repo root:
   ```bash
   npm i
   ```
3. API: set env and migrate:
   - Create `apps/api/.env` with:
     ```bash
     DATABASE_URL="postgresql://inventx:inventx@localhost:5432/inventx"
     ```
   - Generate client and run migrations:
     ```bash
     npm run --workspace=api prisma:generate
     npm run --workspace=api prisma:migrate -- --name init
     ```
4. Run apps (in separate terminals):
   ```bash
   npm run dev --workspace=api
   npm run dev --workspace=web
   npm run start --workspace=mobile
   ```

## Notes
- Currency: PKR; TZ: Asia/Karachi.
- Attendance requires location; tasks can require photo proof.
- Salary = sum of amounts for DONE tasks in a month.
