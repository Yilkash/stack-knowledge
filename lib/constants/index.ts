export const CATEGORIES = [
  'Mathematics',
  'Computer Science',
  'Physics',
  'Chemistry',
  'Biology',
  'Engineering',
  'Business',
  'Literature',
  'History',
  'Other'
] as const;

export const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'tips', label: 'Highest Tips' },
  { value: 'rating', label: 'Highest Rated' }
] as const;

export const ITEMS_PER_PAGE = 12;
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES = ['application/pdf', 'image/png', 'image/jpeg'];
export const MIN_TIP_AMOUNT = 1000000; // 1 STX in microSTX
