import * as Sentry from '@sentry/nextjs';

/** Node 22+ exposes a broken global `localStorage` during SSR; Next dev overlay crashes without this. */
function patchBrokenNodeLocalStorage() {
  const ls = globalThis.localStorage as Storage | undefined;
  if (!ls || typeof ls.getItem === 'function') {
    return;
  }

  const store = new Map<string, string>();
  (globalThis as typeof globalThis & { localStorage: Storage }).localStorage = {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return [...store.keys()][index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, String(value));
    },
  };
}

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    patchBrokenNodeLocalStorage();
    await import('../sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('../sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
