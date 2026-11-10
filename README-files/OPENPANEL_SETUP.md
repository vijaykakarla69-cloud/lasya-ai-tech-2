# OpenPanel Analytics Setup

This document describes how OpenPanel analytics is integrated into the web application, similar to the mobile app implementation.

## Overview

OpenPanel tracking is implemented in a centralized manner:
- **Single Configuration File**: All routes are defined in `src/config/openpanel-pages.ts`
- **Automatic Page Tracking**: Page views are tracked automatically via `OpenPanelPageView` component
- **Event Tracking**: Custom events can be tracked using the `useOpenPanel` hook

## Setup

### 1. Environment Variables

Add these variables to your `.env.local` file (or `.env` for production):

```env
# OpenPanel Configuration
# Same credentials as used in the mobile app (dev_krivatech_go_app_rakesh)
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317
NEXT_PUBLIC_OPENPANEL_CLIENT_SECRET=sec_f73b024ad4c5bd197e98
NEXT_PUBLIC_OPENPANEL_API_URL=https://opapi.kriva.studio
```

**Quick Setup:**
1. Copy `.env.example` to `.env.local` (or `.env` for production)
2. The values are already configured with the mobile app's credentials
3. The API URL defaults to `https://opapi.kriva.studio` (same as mobile app)

**Note**: 
- These are the exact same credentials used in the mobile app
- Since these are `NEXT_PUBLIC_` variables, they will be exposed to the browser
- The API URL matches the mobile app: `https://opapi.kriva.studio`

### 2. Route Configuration

All routes are configured in `src/config/openpanel-pages.ts`. This file contains:
- Route patterns (including dynamic routes like `/services/[slug]`)
- Page names for analytics
- Categories for grouping pages

To add a new route:
1. Open `src/config/openpanel-pages.ts`
2. Add an entry to the `OPENPANEL_PAGES` object:

```typescript
'/your-new-route': {
  pageName: 'YourPageName',
  route: '/your-new-route',
  category: 'content', // Optional: 'navigation', 'content', 'engagement', etc.
},
```

### 3. Automatic Page Tracking

Page views are automatically tracked via the `OpenPanelPageView` component in the root layout (`src/app/layout.tsx`). No additional configuration needed for basic page tracking.

## Usage

### Tracking Custom Events

Use the `useOpenPanel` hook to track custom events:

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function MyComponent() {
  const op = useOpenPanel();

  const handleButtonClick = async () => {
    await op.track('button_clicked', {
      button_name: 'submit',
      page: 'contact',
    });
  };

  return <button onClick={handleButtonClick}>Click me</button>;
}
```

### Tracking Form Submissions

Example: Tracking contact form submissions:

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function ContactForm() {
  const op = useOpenPanel();

  const handleSubmit = async (formData: any) => {
    try {
      // Submit form...
      await submitForm(formData);

      // Track successful submission
      await op.track('contact_form_submitted', {
        form_type: 'general',
        subject: formData.subject,
      });
    } catch (error) {
      // Track form errors
      await op.track('contact_form_error', {
        error_type: error.message,
      });
    }
  };

  // ... rest of component
}
```

### Tracking Career Applications

Example: Tracking career application submissions:

```typescript
const handleSubmit = async (formData: any) => {
  try {
    await AllServices.submitCareerApplication(formData);
    
    // Track career application
    await op.track('career_application_submitted', {
      job_title: jobData?.title,
      job_type: jobData?.type,
      location: jobData?.location,
    });
  } catch (error) {
    // Handle error...
  }
};
```

### User Identification

To identify users (e.g., after login or form submission):

```typescript
const op = useOpenPanel();

await op.identify('user@example.com', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'user@example.com',
  properties: {
    company: 'Example Corp',
  },
});
```

## File Structure

```
src/
├── lib/
│   └── openpanel.ts              # OpenPanel service (API client)
├── config/
│   └── openpanel-pages.ts        # Route configuration (single source of truth)
├── components/
│   └── analytics/
│       └── OpenPanelPageView.tsx # Automatic page view tracking component
└── hooks/
    └── useOpenPanel.ts           # React hook for easy access
```

## How It Works

1. **Page View Tracking**:
   - `OpenPanelPageView` component listens to route changes using Next.js `usePathname()` hook
   - When route changes, it matches the pathname against `OPENPANEL_PAGES` configuration
   - If route is registered, it sends a `screen_view` event to OpenPanel
   - Event includes page name, route, category, and metadata

2. **Event Tracking**:
   - Use `useOpenPanel()` hook in any component
   - Call `track()` method with event name and properties
   - Events are sent asynchronously to OpenPanel API

3. **Centralized Configuration**:
   - All routes are defined in one place (`openpanel-pages.ts`)
   - Easy to add, remove, or modify tracked routes
   - No need to modify individual page components

## Differences from Mobile App

- **Navigator Observer**: Mobile app uses `NavigatorObserver` to track route changes. Web app uses Next.js `usePathname()` hook.
- **Route Matching**: Web app matches routes using pathname patterns, similar to Next.js App Router.
- **Client-Side Only**: All tracking happens client-side (browser). Server-side tracking would require a different approach.

## Testing

1. Set up environment variables
2. Start the development server: `npm run dev`
3. Navigate between pages
4. Check browser console for OpenPanel tracking logs (in development mode)
5. Verify events in OpenPanel dashboard

## Troubleshooting

### Events not appearing in OpenPanel

1. Check environment variables are set correctly
2. Verify client ID and client secret match your OpenPanel project
3. Check browser console for errors
4. Verify the API URL is correct (default: `https://opapi.kriva.studio`)

### Route not being tracked

1. Check if route is added to `OPENPANEL_PAGES` in `src/config/openpanel-pages.ts`
2. Verify route pattern matches the actual pathname (including dynamic segments)
3. Check browser console for warnings

### Cross-Origin Issues

If you see CORS errors:
- Verify the API URL is correct
- Check if OpenPanel API allows requests from your domain
- Ensure client ID and client secret are valid

## Notes

- The implementation follows the same pattern as the mobile app for consistency
- All tracking is asynchronous and non-blocking
- Failed tracking attempts are logged but don't affect user experience
- In production, tracking errors are silent (logged only in development mode)

