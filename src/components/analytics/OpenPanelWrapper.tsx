'use client';

/**
 * OpenPanel Component Wrapper
 * 
 * Client component wrapper for OpenPanelComponent.
 * Returns the OpenPanelComponent if enabled, otherwise returns null.
 * 
 * @example
 * ```tsx
 * import { OpenPanelWrapper } from '@/src/components/analytics/OpenPanelWrapper';
 * <OpenPanelWrapper clientId={clientId} apiUrl="/api/openpanel" />
 * ```
 */

import { OpenPanelComponent } from '@openpanel/nextjs';

// Check if OpenPanel is enabled (defaults to true if not set)
const isEnabled = process.env.NEXT_PUBLIC_OPENPANEL_ENABLED !== 'false';

interface OpenPanelWrapperProps {
  clientId?: string;
  apiUrl?: string;
  trackScreenViews?: boolean;
}

export default function OpenPanelWrapper({ 
  clientId, 
  apiUrl, 
  trackScreenViews = true 
}: OpenPanelWrapperProps) {
  if (!isEnabled) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[OpenPanel Disabled] OpenPanelComponent will not be rendered');
    }
    return null;
  }

  if (!clientId) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[OpenPanel] Client ID is required but not provided');
    }
    return null;
  }

  return (
    <OpenPanelComponent 
      clientId={clientId}
      apiUrl={apiUrl}
      trackScreenViews={trackScreenViews}
    />
  );
}

