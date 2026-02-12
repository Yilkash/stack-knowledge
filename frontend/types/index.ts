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

export interface Leader {
  rank: number;
  address: string;
  reputation: number;
  totalUploads: number;
  totalTips: number;
}

export interface User {
  address: string;
  reputation: number;
  totalUploads: number;
  totalTipsReceived: number;
  totalTipsGiven: number;
  joinedAt: number;
}

export interface Review {
  id: string;
  resourceId: number;
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: number;
  helpful: number;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  minRating?: number;
  sortBy?: 'recent' | 'popular' | 'tips' | 'rating';
}

export interface Notification {
  id: string;
  type: 'tip' | 'review' | 'download' | 'system';
  message: string;
  read: boolean;
  createdAt: number;
  link?: string;
}
