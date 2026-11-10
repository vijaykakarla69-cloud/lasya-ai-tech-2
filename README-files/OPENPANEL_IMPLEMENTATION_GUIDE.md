# OpenPanel Analytics Implementation Guide

This document provides a complete guide to the OpenPanel analytics implementation in the web application.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Setup & Configuration](#setup--configuration)
4. [How It Works](#how-it-works)
5. [Page View Tracking](#page-view-tracking)
6. [Event Tracking](#event-tracking)
7. [User Identification](#user-identification)
8. [Code Examples](#code-examples)
9. [Available Events](#available-events)
10. [Best Practices](#best-practices)
11. [Troubleshooting](#troubleshooting)

---

## Overview

OpenPanel analytics is implemented to track:
- **Page views** - Automatically tracked for all routes
- **User interactions** - Form submissions, button clicks, etc.
- **User identification** - When users submit forms with email addresses

The implementation follows a **centralized approach** where:
- Page views are handled automatically from a single component (`OpenPanelListener`)
- Routes are configured in a single file (`openpanel-pages.ts`)
- Event tracking uses a shared hook (`useOpenPanel`)

---

## Architecture

### File Structure

```
src/
├── app/
│   └── OpenPanelListener.tsx          # Central page view tracker
├── lib/
│   └── openpanel.ts                   # OpenPanel service/API client
├── config/
│   └── openpanel-pages.ts             # Route configuration (single source of truth)
├── hooks/
│   └── useOpenPanel.ts                # React hook for easy access
└── components/
    ├── common/
    │   └── ContactSection.tsx         # Contact form with tracking
    ├── careers/
    │   └── CareerApplicationForm.tsx  # Career form with tracking
    └── get-a-free-quote/
        └── GetAFreeQuoteForm.tsx      # Quote form with tracking
```

### How Data Flows

```
User Action (Page Navigation/Form Submit)
    ↓
OpenPanelListener / Component (tracks event)
    ↓
OpenPanelService (sends to API)
    ↓
OpenPanel API (https://opapi.kriva.studio)
    ↓
OpenPanel Dashboard
```

---

## Setup & Configuration

### 1. Environment Variables

Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=c70a0b2a-803a-4752-bb42-d65639053317
NEXT_PUBLIC_OPENPANEL_CLIENT_SECRET=sec_f73b024ad4c5bd197e98
NEXT_PUBLIC_OPENPANEL_API_URL=https://opapi.kriva.studio
```

**Important Notes:**
- These are the same credentials used in the mobile app
- `NEXT_PUBLIC_` prefix makes them available in the browser (required for client-side tracking)
- The API URL matches the mobile app: `https://opapi.kriva.studio`

### 2. Verify Configuration

The `OpenPanelListener` component logs configuration status on initialization. Check your browser console for:

```
🚀 [OpenPanel] Listener initialized
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔑 Client ID: ✅ Set
🔐 Client Secret: ✅ Set
🌐 API URL: https://opapi.kriva.studio
✅ [OpenPanel] Configuration looks good
```

---

## How It Works

### Page View Tracking (Automatic)

Page views are **automatically tracked** by the `OpenPanelListener` component in the root layout. You don't need to modify individual page components.

**Location:** `src/app/layout.tsx`

```tsx
import OpenPanelListener from './OpenPanelListener';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <OpenPanelListener /> {/* Automatically tracks all page views */}
        {children}
      </body>
    </html>
  );
}
```

### Route Configuration (Single Source of Truth)

All routes are configured in **one file**: `src/config/openpanel-pages.ts`

**Example:**

```typescript
export const OPENPANEL_PAGES: Record<string, OpenPanelPageConfig> = {
  '/': {
    pageName: 'Home',
    route: '/',
    category: 'navigation',
  },
  '/careers': {
    pageName: 'Careers',
    route: '/careers',
    category: 'engagement',
  },
  '/careers/[slug]': {
    pageName: 'CareerDetail',
    route: '/careers',
    category: 'engagement',
  },
  // ... more routes
};
```

**To add a new route:**

1. Open `src/config/openpanel-pages.ts`
2. Add your route to the `OPENPANEL_PAGES` object:

```typescript
'/your-new-route': {
  pageName: 'YourPageName',
  route: '/your-new-route',
  category: 'content', // Optional: navigation, content, engagement, conversion, etc.
},
```

For dynamic routes:

```typescript
'/your-route/[slug]': {
  pageName: 'YourDetailPage',
  route: '/your-route',
  category: 'content',
},
```

### Dynamic Route Tracking

Dynamic routes (with slugs) are automatically handled:

- `/careers` → Screen Name: "Careers"
- `/careers/job-123` → Screen Name: "CareerDetail - job-123"
- `/services/web-development` → Screen Name: "ServiceDetail - web-development"

The slug is automatically extracted and included in the screen name for unique tracking.

---

## Page View Tracking

### Automatic Tracking

Page views are **automatically tracked** when users navigate between pages. No code needed in individual components.

**How it works:**
1. `OpenPanelListener` watches route changes using Next.js `usePathname()` hook
2. When route changes, it looks up the route in `openpanel-pages.ts`
3. Sends `screen_view` event to OpenPanel with page name and metadata
4. Dynamic routes include slug in the screen name for uniqueness

**Example Console Output:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 [OpenPanel] Tracking Page View
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Pathname: /careers/job-123
📝 Page Name: CareerDetail
🔗 Full Path: /careers/job-123
✅ [OpenPanel] Route found in configuration
   Category: engagement
   Slug: job-123
📤 [OpenPanel] Sending screen_view event...
   Screen Name: CareerDetail - job-123
   Path: /careers/job-123
✅ [OpenPanel] Page view tracked successfully!
```

---

## Event Tracking

### Using the Hook

Use the `useOpenPanel()` hook in any component to track custom events:

```tsx
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

### Track Function Signature

```typescript
op.track(eventName: string, properties?: Record<string, any>): Promise<boolean>
```

**Parameters:**
- `eventName` - Name of the event (e.g., 'button_clicked', 'form_submitted')
- `properties` - Optional object with event properties

**Returns:** `Promise<boolean>` - `true` if tracking succeeded, `false` otherwise

---

## User Identification

### When to Identify Users

Identify users when they:
- Submit forms with email addresses
- Create accounts
- Log in
- Provide contact information

### How to Identify

```tsx
const op = useOpenPanel();

await op.identify('user@example.com', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'user@example.com',
  properties: {
    company: 'Example Corp',
    phone: '+1234567890',
  },
});
```

### Identify Function Signature

```typescript
op.identify(
  profileId: string,
  options?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    properties?: Record<string, any>;
  }
): Promise<boolean>
```

**Parameters:**
- `profileId` - Unique identifier (usually email address)
- `options.firstName` - User's first name
- `options.lastName` - User's last name
- `options.email` - User's email address
- `options.properties` - Additional user properties

**Returns:** `Promise<boolean>` - `true` if identification succeeded, `false` otherwise

---

## Code Examples

### Example 1: Track Form Submission

```tsx
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function MyForm() {
  const op = useOpenPanel();

  const handleSubmit = async (formData: any) => {
    try {
      // Submit form to your API
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      // Identify user if email is provided
      if (formData.email) {
        await op.identify(formData.email, {
          email: formData.email,
          firstName: formData.name?.split(' ')[0],
          lastName: formData.name?.split(' ').slice(1).join(' '),
        });
      }

      // Track successful submission
      await op.track('form_submitted', {
        form_type: 'contact',
        subject: formData.subject,
      });
    } catch (error) {
      // Track errors
      await op.track('form_submission_error', {
        error_type: error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}
```

### Example 2: Track Button Clicks

```tsx
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function CtaButton() {
  const op = useOpenPanel();

  const handleClick = async () => {
    await op.track('cta_button_clicked', {
      button_text: 'Get Started',
      button_location: 'hero_section',
      page: 'home',
    });
    
    // Navigate or perform action
    window.location.href = '/contact';
  };

  return <button onClick={handleClick}>Get Started</button>;
}
```

### Example 3: Track Page-Specific Interactions

```tsx
'use client';
import { useEffect } from 'react';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';
import { useParams } from 'next/navigation';

export default function DetailPage({ data }) {
  const op = useOpenPanel();
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    // Track detail page view (in addition to automatic page view)
    op.track('detail_page_viewed', {
      page_type: 'service',
      slug: slug,
      title: data?.title,
    });
  }, [slug, data]);

  return (
    <div>
      <h1>{data.title}</h1>
      {/* page content */}
    </div>
  );
}
```

### Example 4: Track Link Clicks

```tsx
'use client';
import Link from 'next/link';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function ServiceLink({ service }) {
  const op = useOpenPanel();

  const handleClick = async () => {
    await op.track('service_link_clicked', {
      service_name: service.name,
      service_slug: service.slug,
      source_page: 'services_listing',
    });
  };

  return (
    <Link href={`/services/${service.slug}`} onClick={handleClick}>
      {service.name}
    </Link>
  );
}
```

---

## Available Events

### Page View Events (Automatic)

All page views are automatically tracked as `screen_view` events. Screen names are generated from route configuration.

**Examples:**
- Home page: `screen_view` with screen name "Home"
- Careers listing: `screen_view` with screen name "Careers"
- Career detail: `screen_view` with screen name "CareerDetail - job-123"

### Custom Events (Manual)

#### Form Events

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `contact_form_submitted` | Contact form successfully submitted | `form_type`, `subject`, `has_message`, `has_phone`, `user_email` |
| `contact_form_validation_error` | Contact form validation failed | `errors`, `form_type` |
| `contact_form_submission_error` | Contact form submission failed | `error_type`, `form_type` |
| `quote_request_submitted` | Quote request form submitted | `looking_for`, `services`, `budget`, `has_project_brief`, `has_document`, `user_email` |
| `quote_request_submission_error` | Quote request submission failed | `error_type`, `looking_for`, `budget` |
| `career_application_submitted` | Career application submitted | `job_title`, `job_type`, `job_location`, `has_resume`, `user_email` |
| `career_application_validation_error` | Career application validation failed | `errors`, `job_title`, `job_slug` |
| `career_application_submission_error` | Career application submission failed | `error_type`, `job_title`, `job_slug` |

#### Detail Page Events

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `service_detail_viewed` | Service detail page viewed | `service_slug`, `service_title` |
| `technology_detail_viewed` | Technology detail page viewed | `technology_slug`, `technology_name` |
| `industry_detail_viewed` | Industry detail page viewed | `industry_slug`, `industry_name` |
| `case_study_detail_viewed` | Case study detail page viewed | `case_study_slug`, `case_study_title` |
| `career_detail_viewed` | Career detail page viewed | `career_slug`, `job_title`, `job_type`, `experience_range` |

#### Listing Page Events

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `career_category_filtered` | Career category filter changed | `category`, `previous_category` |
| `career_job_listing_clicked` | Job listing clicked | `job_title`, `job_id`, `job_slug`, `job_level`, `job_type`, `category` |

---

## Best Practices

### 1. Event Naming

- Use **snake_case** for event names: `form_submitted`, `button_clicked`
- Be descriptive: `contact_form_submitted` not `form_submit`
- Use consistent naming patterns: `[object]_[action]` format

### 2. Properties

- Include relevant context in properties
- Use consistent property names across similar events
- Include identifiers (slugs, IDs) when available
- Don't include sensitive data (passwords, credit cards, etc.)

### 3. User Identification

- Identify users when they provide email addresses
- Use email as `profileId` for consistency
- Include name information when available
- Store additional metadata in `properties`

### 4. Error Tracking

- Track validation errors to understand user friction
- Track submission errors to identify technical issues
- Include error types/messages in event properties

### 5. Performance

- Event tracking is asynchronous and non-blocking
- Failed tracking doesn't affect user experience
- Events are queued and sent in the background

---

## Troubleshooting

### Events Not Appearing in OpenPanel

**Check 1: Environment Variables**
- Verify `.env.local` file exists with correct values
- Restart development server after adding environment variables
- Check browser console for configuration warnings

**Check 2: Console Logs**
- Open browser console (F12)
- Look for OpenPanel log messages
- Check for error messages

**Check 3: Network Tab**
- Open browser DevTools → Network tab
- Filter for requests to `opapi.kriva.studio`
- Check if requests are being sent and responses received

**Check 4: Route Configuration**
- Verify route is in `src/config/openpanel-pages.ts`
- Check route pattern matches exactly (including `/` at start)
- For dynamic routes, ensure `[slug]` pattern is correct

### Page Views Not Tracking

**Issue: Page not in configuration**
```
⚠️  [OpenPanel] Route not in configuration, skipping tracking
```

**Solution:** Add the route to `src/config/openpanel-pages.ts`

**Issue: Duplicate tracking**
```
🔍 [OpenPanel] Path unchanged, skipping duplicate tracking
```

**Solution:** This is normal - it prevents duplicate tracking on re-renders

### Events Not Sending

**Check console for errors:**
```
❌ [OpenPanel] Failed to track event
❌ [OpenPanel] Error tracking event: [error details]
```

**Common causes:**
- Missing environment variables
- Network connectivity issues
- Invalid API credentials
- CORS issues (check API URL)

### User Identification Not Working

**Ensure:**
- Email is provided as `profileId`
- `identify()` is called before or after `track()`
- Check console for identification success logs

---

## Adding New Event Tracking

### Step 1: Import the Hook

```tsx
import { useOpenPanel } from '@/src/hooks/useOpenPanel';
```

### Step 2: Initialize in Component

```tsx
const op = useOpenPanel();
```

### Step 3: Track Events

```tsx
await op.track('your_event_name', {
  property1: 'value1',
  property2: 'value2',
});
```

### Step 4: Identify Users (if applicable)

```tsx
if (userEmail) {
  await op.identify(userEmail, {
    email: userEmail,
    firstName: firstName,
    lastName: lastName,
  });
}
```

### Step 5: Test

- Check browser console for tracking logs
- Verify events appear in OpenPanel dashboard
- Confirm properties are included correctly

---

## Integration Points

### Current Implementation

✅ **Page Views:** Automatically tracked via `OpenPanelListener`
✅ **Contact Form:** `src/components/common/ContactSection.tsx`
✅ **Quote Form:** `src/components/get-a-free-quote/GetAFreeQuoteForm.tsx`
✅ **Career Form:** `src/components/careers/CareerApplicationForm.tsx`
✅ **Detail Pages:**
  - Services: `src/app/services/[slug]/ServiceDetailClient.tsx`
  - Technologies: `src/app/technologies/[slug]/TechnologyDetailClient.tsx`
  - Industries: `src/app/industries/[slug]/IndustryDetailClient.tsx`
  - Case Studies: `src/app/casestudies/[slug]/CaseStudyDetailClient.tsx`
  - Careers: `src/components/careerpage/page.tsx`

### Where to Add Tracking

- **CTA Buttons:** Track clicks on call-to-action buttons
- **Navigation:** Track menu clicks, footer links
- **Downloads:** Track file downloads
- **Video Plays:** Track video interactions
- **Newsletter:** Track newsletter subscriptions
- **Social Shares:** Track social media shares

---

## API Reference

### OpenPanelService

Location: `src/lib/openpanel.ts`

#### Methods

**`track(eventName, properties)`**
- Sends a custom event to OpenPanel
- Returns: `Promise<boolean>`

**`screen(screenName, path, properties)`**
- Sends a page view event to OpenPanel
- Returns: `Promise<boolean>`

**`identify(profileId, options)`**
- Identifies a user in OpenPanel
- Returns: `Promise<boolean>`

### useOpenPanel Hook

Location: `src/hooks/useOpenPanel.ts`

Returns an object with:
- `track(eventName, properties)` - Track custom events
- `screen(screenName, path, properties)` - Track screen views
- `identify(profileId, options)` - Identify users

---

## Mobile App Compatibility

The web implementation uses the **same credentials and API URL** as the mobile app:

- **Client ID:** `c70a0b2a-803a-4752-bb42-d65639053317`
- **Client Secret:** `sec_f73b024ad4c5bd197e98`
- **API URL:** `https://opapi.kriva.studio`

This means:
- Events from both web and mobile appear in the same OpenPanel project
- User identification works across platforms (same email = same user profile)
- Consistent tracking across all platforms

---

## Support & Resources

- **OpenPanel Documentation:** https://openpanel.dev/docs
- **Implementation Files:**
  - Service: `src/lib/openpanel.ts`
  - Hook: `src/hooks/useOpenPanel.ts`
  - Listener: `src/app/OpenPanelListener.tsx`
  - Config: `src/config/openpanel-pages.ts`

---

## Quick Reference

### Add Page View Tracking
1. Add route to `src/config/openpanel-pages.ts`
2. That's it! Tracking is automatic

### Add Event Tracking
```tsx
const op = useOpenPanel();
await op.track('event_name', { property: 'value' });
```

### Add User Identification
```tsx
await op.identify(email, { firstName, lastName, email });
```

### Check if Working
1. Open browser console
2. Navigate to a page
3. Look for OpenPanel logs
4. Check OpenPanel dashboard

---

**Last Updated:** [Current Date]
**Version:** 1.0
**Maintained By:** Development Team

