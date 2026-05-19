export const CATEGORIES = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Engineering",
  "Medicine",
  "Law",
  "Business",
  "Humanities",
  "Literature",
  "History",
  "Other"
] as const;

export const APP_NAME = "StackKnowledge";
export const APP_DESCRIPTION = "Decentralized Share-to-Earn Knowledge Platform";

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/stackknowledge",
  github: "https://github.com/Yilkash/stack-knowledge",
  discord: "https://discord.gg/stackknowledge",
};

export const CONTACT_EMAIL = "hello@stackknowledge.org";

export const PLATFORM_FEE_PERCENTAGE = 5;
export const MICROSTACKS_PER_STX = 1_000_000;

export const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'tips', label: 'Highest Tips' },
  { value: 'rating', label: 'Highest Rated' }
] as const;

export const ITEMS_PER_PAGE = 12;
export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = ['application/pdf', 'image/png', 'image/jpeg'];
export const MIN_TIP_AMOUNT = 1000000;
