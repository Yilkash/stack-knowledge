import { NextRequest, NextResponse } from 'next/server';

/**
 * API route for managing resource reviews and ratings.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const resourceId = searchParams.get('resourceId');

  if (!resourceId) {
    return NextResponse.json(
      {
        success: false,
        error: 'Resource ID required',
        message: 'A valid resourceId must be provided as a query parameter.'
      },
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

  return NextResponse.json({
    success: true,
    data: mockReviews
  });
}

export async function POST(_request: NextRequest) {
  try {
    // TODO: Submit to blockchain

    return NextResponse.json({
      success: true,
      data: { reviewId: '1' }
    });
  } catch (_error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit review',
        message: 'An error occurred while attempting to save your review.'
      },
      { status: 500 }
    );
  }
}
