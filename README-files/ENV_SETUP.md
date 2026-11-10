# Environment Variables Setup for OpenPanel

This file contains the OpenPanel configuration values that match the mobile app.

## Create `.env.local` file

Create a `.env.local` file in the root directory of the project with the following content:

```env
# OpenPanel Analytics Configuration
# Same credentials as used in the mobile app (dev_krivatech_go_app_rakesh)
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317
NEXT_PUBLIC_OPENPANEL_CLIENT_SECRET=sec_f73b024ad4c5bd197e98
NEXT_PUBLIC_OPENPANEL_API_URL=https://opapi.kriva.studio
```

## Quick Setup Steps

1. Create `.env.local` file in the project root (same directory as `package.json`)
2. Copy the values above into the file
3. Save the file
4. Restart your development server if it's running

## Values Explanation

- **CLIENT_ID**: `c70a0b2a-803a-4752-bb42-d65639053317` - Same as mobile app
- **CLIENT_SECRET**: `sec_f73b024ad4c5bd197e98` - Same as mobile app  
- **API_URL**: `https://opapi.kriva.studio` - Same API endpoint as mobile app

These values are already configured in the mobile app's `openpanel_keys.dart` file.

## Production Deployment

For production, you can either:
- Use the same `.env.local` file (Next.js will use it)
- Set these as environment variables in your hosting platform (Vercel, Netlify, etc.)
- Use `.env.production` file

**Note**: Since these use `NEXT_PUBLIC_` prefix, they will be exposed to the browser, which is expected for client-side analytics tracking.

