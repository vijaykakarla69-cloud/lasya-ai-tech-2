/**
 * OpenPanel Analytics Service
 * 
 * Centralized service for OpenPanel tracking functionality.
 * Can be easily enabled/disabled via NEXT_PUBLIC_OPENPANEL_ENABLED environment variable.
 * 
 * Usage:
 *   import { openPanel } from '@/src/services/openpanel';
 *   openPanel.track('event_name', { property: 'value' });
 *   openPanel.identify({ profileId: 'user@example.com', email: 'user@example.com' });
 * 
 * To disable OpenPanel globally, set NEXT_PUBLIC_OPENPANEL_ENABLED=false in .env.local
 */

import React from 'react';
import { useOpenPanel } from '@openpanel/nextjs';
import type { TrackProperties, IdentifyPayload } from '@openpanel/nextjs';

// Check if OpenPanel is enabled (defaults to true if not set)
const isEnabled = process.env.NEXT_PUBLIC_OPENPANEL_ENABLED !== 'false';

/**
 * No-op functions that do nothing when OpenPanel is disabled
 */
const noop = {
  track: (_name: string, _properties?: TrackProperties) => {},
  identify: (_payload: IdentifyPayload) => {},
  screenView: (_properties?: TrackProperties) => {},
  increment: (_payload: any) => {},
  decrement: (_payload: any) => {},
  clear: () => {},
  setGlobalProperties: (_properties: Record<string, unknown>) => {},
  revenue: (_amount: number, _properties?: Record<string, unknown>) => Promise.resolve(),
  flushRevenue: () => Promise.resolve(),
  clearRevenue: () => {},
  pendingRevenue: (_amount: number, _properties?: Record<string, unknown>) => {},
  fetchDeviceId: () => Promise.resolve(''),
};

/**
 * OpenPanel Service Hook
 * 
 * Returns OpenPanel methods if enabled, otherwise returns no-op functions.
 * Use this hook in React components.
 * 
 * @example
 * ```tsx
 * const op = useOpenPanelService();
 * op.track('button_clicked', { button: 'submit' });
 * ```
 */
export function useOpenPanelService() {
  // Always call the hook (React rules), but wrap methods to check if enabled
  const op = useOpenPanel();
  
  // If disabled, return no-op functions
  if (!isEnabled) {
    return noop;
  }
  
  // Return the actual OpenPanel methods
  return op;
}

/**
 * OpenPanel Service Object
 * 
 * Direct access to OpenPanel methods (for use outside React components).
 * Returns no-op functions if disabled.
 * 
 * @example
 * ```tsx
 * import { openPanel } from '@/src/services/openpanel';
 * openPanel.track('event_name', { property: 'value' });
 * ```
 */
export const openPanel = {
  /**
   * Track an event
   */
  track: (name: string, properties?: TrackProperties) => {
    if (!isEnabled) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[OpenPanel Disabled] track("${name}",`, properties, ')');
      }
      return;
    }
    // Note: This won't work outside React components
    // For non-React usage, use the hook or initialize OpenPanel directly
    console.warn('[OpenPanel] track() called outside React component. Use useOpenPanelService() hook instead.');
  },

  /**
   * Identify a user
   */
  identify: (payload: IdentifyPayload) => {
    if (!isEnabled) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[OpenPanel Disabled] identify(', payload, ')');
      }
      return;
    }
    console.warn('[OpenPanel] identify() called outside React component. Use useOpenPanelService() hook instead.');
  },

  /**
   * Check if OpenPanel is enabled
   */
  isEnabled: () => isEnabled,
};

/**
 * OpenPanel Component Wrapper
 * 
 * Re-exported from the client component wrapper.
 * Use this in your layout.tsx to conditionally render OpenPanel.
 * 
 * @example
 * ```tsx
 * import { OpenPanelWrapper } from '@/src/services/openpanel';
 * <OpenPanelWrapper clientId={clientId} apiUrl="/api/openpanel" />
 * ```
 */
export { default as OpenPanelWrapper } from '@/src/components/analytics/OpenPanelWrapper';

// Export the enabled state for checking outside components
export const OPENPANEL_ENABLED = isEnabled;

