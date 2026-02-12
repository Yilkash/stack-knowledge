import { NextRequest, NextResponse } from 'next/server';

/**
 * API route for managing resource reviews and ratings.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const resourceId = searchParams.get('resourceId');

  if (!resourceId) {
    return NextResponse.json(
      { error: 'Resource ID required' },
      { status: 400 }
    );
  }

  // TODO: Fetch from blockchain
  const mockReviews = [
    {
      id: '1',
      resourceId: parseInt(resourceId),
      reviewer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
      rating: 5,
      comment: 'Excellent resource!',
      createdAt: Date.now(),
      helpful: 10
    }
  ];

  return NextResponse.json({ reviews: mockReviews });
}

export async function POST(_request: NextRequest) {
  try {
    // TODO: Submit to blockchain

    // TODO: Submit to blockchain
    return NextResponse.json({
      success: true,
      reviewId: '1'
    });
  } catch (_error) {
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}
