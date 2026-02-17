import { useEffect, useState } from 'react';

/**
 * Custom hook for debouncing a value.
 * Useful for delaying the execution of a function or API call until a certain amount of time has passed without the value changing.
 * 
 * @template T - The type of the value to debounce
 * @param {T} value - The value to debounce
 * @param {number} [delay=500] - The delay in milliseconds
 * @returns {T} The debounced value
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
