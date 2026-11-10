# LasyaAitech website

Next.js marketing site for [lasyaaitech.com](https://lasyaaitech.com).

## Local setup

**Requirements:** Node.js 20 LTS recommended (Node 22+ works after the `instrumentation.ts` localStorage patch).

```bash
npm install
cp .env.local.example .env.local
npm run start_lasyaaitech_dev
```

Open [http://localhost:3700](http://localhost:3700).

Use `npm run start_lasyaaitech_dev` (not plain `npm run dev`) so `PORT`, `DEFAULT_COMPANY`, and dev flags are set correctly.

### Environment variables

| Variable | Required locally | Notes |
|----------|------------------|-------|
| `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` | No | Set `NEXT_PUBLIC_OPENPANEL_ENABLED=false` to skip analytics |
| `BANNER_API_URL` | No | Without it, promo banners are skipped |
| `BANNER_CLIENT_ID` / `BANNER_CLIENT_SECRET` | No | Only if using banner API |

Get production values from your team or deployment secrets.

### Other scripts

- `npm run start_krivatech_dev` — KrivaTech variant on port 3701
- `npm run build_lasyaaitech` — production build for lasyaaitech.com

version 1.0.0 +1
added+++
