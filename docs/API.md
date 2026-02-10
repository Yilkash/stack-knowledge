# API Documentation

## Resources API

### GET /api/resources
Fetch paginated list of resources.

**Query Parameters:**
- `query` (string): Search query
- `category` (string): Filter by category
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 12)

**Response:**
```json
{
  "resources": [...],
  "total": 100,
  "page": 1,
  "totalPages": 9
}
```

### POST /api/resources
Create a new resource.

**Body:**
```json
{
  "title": "Resource Title",
  "description": "Resource description",
  "url": "ipfs://...",
  "category": "Mathematics"
}
```

## Reviews API

### GET /api/reviews
Fetch reviews for a resource.

**Query Parameters:**
- `resourceId` (number): Resource ID

### POST /api/reviews
Submit a review.

**Body:**
```json
{
  "resourceId": 1,
  "rating": 5,
  "comment": "Great resource!"
}
```

## User API

### GET /api/user
Fetch user profile.

**Query Parameters:**
- `address` (string): Stacks address
