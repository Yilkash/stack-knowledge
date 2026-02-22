/**
 * Represents an educational resource uploaded to the platform.
 */
export interface Resource {
  id: number;
  uploader: string;
  title: string;
  description: string;
  url: string;
  totalTips: number;
  createdAt: number;
  category?: string;
  tags?: string[];
  fileSize?: number;
  downloads?: number;
  rating?: number;
  reviewCount?: number;
}

/**
 * Represents a user's performance and ranking on the leaderboard.
 */
export interface Leader {
  rank: number;
  address: string;
  reputation: number;
  totalUploads: number;
  totalTips: number;
  uploads?: number;
  score?: number;
  tipsReceived?: number;
}

/**
 * Represents a user's profile and platform-specific statistics.
 */
export interface User {
  address: string;
  reputation: number;
  totalUploads: number;
  totalTipsReceived: number;
  totalTipsGiven: number;
  joinedAt: number;
  uploads?: number;
  score?: number;
}

/**
 * Represents a review left by a student on a resource.
 */
export interface Review {
  id: string;
  resourceId: number;
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: number;
  helpful: number;
}

/**
 * Filter parameters for searching and sorting resources.
 */
export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  minRating?: number;
  sortBy?: 'recent' | 'popular' | 'rating' | 'tips';
}

/**
 * System and user notifications.
 */
export interface Notification {
  id: string;
  type: 'tip' | 'review' | 'download' | 'system';
  message: string;
  read: boolean;
  createdAt: number;
  link?: string;
}

/**
 * Standardized API response structure.
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  owner: string;
  resourceIds: number[];
  isPublic: boolean;
  createdAt: number;
}

export interface QualityStats {
  score: number;
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
  plagiarismScore: number;
  aiVerification: boolean;
}
