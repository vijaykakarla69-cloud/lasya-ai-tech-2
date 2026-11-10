# OpenPanel Debugging Guide

## Current Setup

### 1. Environment Variables Required

Create/update your `.env.local` file with:

```env
# Client-side (needs NEXT_PUBLIC_ prefix for browser access)
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317

# Server-side only (NO NEXT_PUBLIC_ prefix - keeps it secure)
OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317
OPENPANEL_CLIENT_SECRET=sec_f73b024ad4c5bd197e98
OPENPANEL_API_URL=https://opapi.kriva.studio
```

### 2. How It Works

```
Browser → OpenPanelComponent (clientId only)
    ↓
/api/openpanel route (adds clientSecret server-side)
    ↓
OpenPanel API (https://opapi.kriva.studio)
```

### 3. Debugging Steps

1. **Check Server Logs**
   - Look for the debug output: `🔍 [OpenPanel API Route] Configuration:`
   - Verify Client ID and Secret are set

2. **Check Browser Network Tab**
   - Requests should go to `/api/openpanel` (not directly to OpenPanel API)
   - Check request headers
   - Check response status (should be 200, not 401)

3. **Verify Environment Variables**
   - Restart dev server after changing `.env.local`
   - Check that variables are loaded: `console.log(process.env.OPENPANEL_CLIENT_SECRET)`

4. **Test API Route Directly**
   ```bash
   curl -X POST http://localhost:3000/api/openpanel \
     -H "Content-Type: application/json" \
     -d '{"type":"track","payload":{"name":"test"}}'
   ```

### 4. Common Issues

**401 Unauthorized:**
- Client secret not set in environment variables
- Wrong client ID or secret
- API route not being used (check Network tab)

**Requests going directly to OpenPanel:**
- API route not detected
- Check that `/api/openpanel/route.ts` exists
- Verify route handler exports GET and POST

**Client ID undefined:**
- Missing `NEXT_PUBLIC_` prefix for client-side usage
- Restart dev server after adding env vars

