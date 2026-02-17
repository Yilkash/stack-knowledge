import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility for intelligently merging Tailwind CSS classes using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a Stacks address for display by truncating the middle.
 * 
 * @param {string} address - The full Stacks address
 * @returns {string} The formatted short address (e.g., SP12...3456)
 */
export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

/**
 * Converts microstacks to STX and formats for display.
 * 
 * @param {number} microSTX - Amount in microstacks
 * @returns {string} Formatted STX amount with 2 decimal places
 */
export function formatSTX(microSTX: number): string {
  return (microSTX / 1000000).toFixed(2);
}

/**
 * Formats a Unix timestamp into a readable date string.
 * 
 * @param {number} timestamp - Unix timestamp in seconds
 * @returns {string} Formatted date (e.g., Jan 1, 2024)
 */
export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Formats a file size in bytes to a human-readable string.
 * 
 * @param {number} bytes - File size in bytes
 * @returns {string} Human-readable file size (e.g., 1.5 MB)
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Truncates text to a specified maximum length and appends an ellipsis.
 * 
 * @param {string} text - The text to truncate
 * @param {number} maxLength - The maximum allowed length
 * @returns {string} The truncated string
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Validates a file based on size and allowed MIME types.
 * 
 * @param {File} file - The file to validate
 * @returns {Object} Validation result { valid: boolean, error?: string }
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  const MAX_SIZE = 10 * 1024 * 1024;
  const ALLOWED_TYPES = ['application/pdf', 'image/png', 'image/jpeg'];

  if (file.size > MAX_SIZE) {
    return { valid: false, error: 'File size must be less than 10MB' };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { valid: false, error: 'Only PDF and image files are allowed' };
  }

  return { valid: true };
}
