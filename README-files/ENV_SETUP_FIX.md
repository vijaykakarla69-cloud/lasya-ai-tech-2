# OpenPanel Environment Variables Setup

## Issue: 404 on /api/openpanel and 401 Unauthorized

### Root Causes:
1. **Environment Variables**: Using `.env` instead of `.env.local` (or variables not loaded)
2. **API Route**: Route handler might not be reading credentials correctly
3. **Client Component**: Not detecting the API route automatically

## Solution:

### 1. Environment Variables Setup

Create `.env.local` file in the project root (Next.js reads this first):

```env
# Client-side (needs NEXT_PUBLIC_ prefix for browser)
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317

# Server-side only (NO NEXT_PUBLIC_ prefix - keeps secret secure)
OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317
OPENPANEL_CLIENT_SECRET=sec_f73b024ad4c5bd197e98
OPENPANEL_API_URL=https://opapi.kriva.studio
```

**Important Notes:**
- `.env.local` takes precedence over `.env`
- Server-side variables (OPENPANEL_CLIENT_SECRET) should NOT have `NEXT_PUBLIC_` prefix
- Client-side variables (for OpenPanelComponent) MUST have `NEXT_PUBLIC_` prefix
- Restart dev server after changing environment variables

### 2. Verify Environment Variables Are Loaded

Add this temporary debug code to verify:

```typescript
// In route.ts, add before the handler:
console.log('Environment check:', {
  OPENPANEL_CLIENT_ID: process.env.OPENPANEL_CLIENT_ID ? '✅' : '❌',
  OPENPANEL_CLIENT_SECRET: process.env.OPENPANEL_CLIENT_SECRET ? '✅' : '❌',
  NEXT_PUBLIC_OPENPANEL_CLIENT_ID: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID ? '✅' : '❌',
});
```

### 3. Test the API Route

```bash
curl -X POST http://localhost:3000/api/openpanel \
  -H "Content-Type: application/json" \
  -d '{"type":"track","payload":{"name":"test"}}'
```

Should return 200 OK, not 404 or 401.

### 4. Check Browser Network Tab

- Requests should go to `/api/openpanel` (not directly to `opapi.kriva.studio`)
- Status should be 200 (not 401)
- Check request/response in Network tab

### 5. If Still Getting 404

The route handler might need explicit environment variable reading. The `createRouteHandler` should automatically read `OPENPANEL_CLIENT_ID` and `OPENPANEL_CLIENT_SECRET`, but if it's not working, we might need to check the OpenPanel library version or implementation.

### 6. Alternative: Manual Route Handler

If the automatic route handler doesn't work, we can create a manual proxy route that explicitly reads credentials and forwards requests.

