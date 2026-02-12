/**
 * Simple in-memory cache utility for API requests.
 */
const cache = new Map<string, { data: unknown; expiry: number }>();

export function setCache(key: string, data: unknown, ttl: number = 300000) {
  cache.set(key, {
    data,
    expiry: Date.now() + ttl
  });
}

export function getCache<T>(key: string): T | null {
  const item = cache.get(key);

  if (!item) return null;

  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }

  return item.data as T;
}

export function clearCache(key?: string) {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
}

export function getCacheStats() {
  return {
    size: cache.size,
    keys: Array.from(cache.keys())
  };
}
