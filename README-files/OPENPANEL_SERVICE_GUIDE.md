# OpenPanel Service Guide

## Overview

All OpenPanel tracking functionality has been centralized into a single service (`src/services/openpanel.ts`) for easy enable/disable control.

## Enable/Disable OpenPanel

To enable or disable OpenPanel globally, set the environment variable in `.env.local`:

```env
# Enable OpenPanel (default)
NEXT_PUBLIC_OPENPANEL_ENABLED=true

# Disable OpenPanel (all tracking will be disabled)
NEXT_PUBLIC_OPENPANEL_ENABLED=false
```

**That's it!** No need to comment out code in multiple files. Just change this one environment variable.

## Usage in Components

### Using the Hook (Recommended)

```tsx
import { useOpenPanelService } from '@/src/services/openpanel';

export default function MyComponent() {
  const op = useOpenPanelService();
  
  const handleSubmit = () => {
    // Track event (will be no-op if disabled)
    op.track('form_submitted', { form_type: 'contact' });
    
    // Identify user (will be no-op if disabled)
    op.identify({
      profileId: 'user@example.com',
      email: 'user@example.com',
    });
  };
  
  return <button onClick={handleSubmit}>Submit</button>;
}
```

### Using in Layout

```tsx
import { OpenPanelWrapper } from '@/src/services/openpanel';

export default function RootLayout({ children }) {
  const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
  
  return (
    <html>
      <body>
        {children}
        {/* Automatically handles enable/disable */}
        <OpenPanelWrapper 
          clientId={clientId}
          apiUrl="/api/openpanel"
          trackScreenViews={true}
        />
      </body>
    </html>
  );
}
```

## How It Works

1. **When Enabled** (`NEXT_PUBLIC_OPENPANEL_ENABLED=true`):
   - All tracking calls work normally
   - Events are sent to OpenPanel API
   - User identification works as expected

2. **When Disabled** (`NEXT_PUBLIC_OPENPANEL_ENABLED=false`):
   - All tracking calls become no-op functions (do nothing)
   - No API calls are made
   - No performance impact
   - In development mode, logs show what would have been tracked

## Files Updated

All OpenPanel usage has been migrated to use the centralized service:

- ✅ `src/app/layout.tsx` - Uses `OpenPanelWrapper`
- ✅ `src/components/common/ContactSection.tsx` - Uses `useOpenPanelService()`
- ✅ `src/components/get-a-free-quote/GetAFreeQuoteForm.tsx` - Uses `useOpenPanelService()`
- ✅ `src/components/common/NewsletterModal.tsx` - Uses `useOpenPanelService()`
- ✅ `src/components/careers/CareerApplicationForm.tsx` - Uses `useOpenPanelService()`

## Benefits

1. **Single Point of Control**: Enable/disable from one environment variable
2. **No Code Changes Needed**: Just update `.env.local` to toggle
3. **Clean Code**: No need to comment/uncomment code across files
4. **Type Safe**: Full TypeScript support
5. **Performance**: When disabled, no overhead (no-op functions)

## Migration Notes

If you need to add OpenPanel tracking to new components:

**Before:**
```tsx
import { useOpenPanel } from '@openpanel/nextjs';
const op = useOpenPanel();
```

**After:**
```tsx
import { useOpenPanelService } from '@/src/services/openpanel';
const op = useOpenPanelService();
```

That's the only change needed! The API is identical, but now it respects the enable/disable flag.

