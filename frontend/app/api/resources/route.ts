import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query') || '';
  const category = searchParams.get('category') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');

  // TODO: Implement actual blockchain query
  const mockResources = Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    title: `Resource ${i + 1}`,
    description: 'Sample description',
    uploader: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
    category: category || 'Mathematics',
    totalTips: 1000000,
    rating: 4.5,
    createdAt: Date.now()
  }));

  return NextResponse.json({
    resources: mockResources,
    total: 100,
    page,
    totalPages: Math.ceil(100 / limit)
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, url, category } = body;

    // TODO: Implement actual blockchain transaction
    return NextResponse.json({
      success: true,
      resourceId: 1
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    );
  }
}
