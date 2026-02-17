import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json(
      {
        success: false,
        error: 'Address required',
        message: 'A valid Stacks address must be provided as a query parameter.'
      },
      { status: 400 }
    );
  }

  // TODO: Fetch from blockchain
  const mockUser = {
    address,
    reputation: 150,
    totalUploads: 25,
    totalTipsReceived: 50000000,
    totalTipsGiven: 10000000,
    joinedAt: Date.now() - 86400000 * 30
  };

  return NextResponse.json({
    success: true,
    data: mockUser
  });
}
