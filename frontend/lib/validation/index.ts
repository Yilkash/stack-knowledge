export function validateResourceInput(data: { title?: string; description?: string; url?: string; category?: string }): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.title || data.title.length < 3 || data.title.length > 100) {
    errors.push('Title must be between 3 and 100 characters');
  }

  if (!data.description || data.description.length < 10 || data.description.length > 500) {
    errors.push('Description must be between 10 and 500 characters');
  }

  if (!data.url || !data.url.startsWith('ipfs://')) {
    errors.push('Invalid IPFS URL');
  }

  if (!data.category) {
    errors.push('Category is required');
  }

  return { valid: errors.length === 0, errors };
}

export function validateReviewInput(data: { rating?: number; comment?: string }): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.push('Rating must be between 1 and 5');
  }

  if (!data.comment || data.comment.length < 10 || data.comment.length > 500) {
    errors.push('Comment must be between 10 and 500 characters');
  }

  return { valid: errors.length === 0, errors };
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000);
}
