import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address');

  return NextResponse.json({
    user: {
      address,
      reputation: 150,
      totalUploads: 5,
      totalTipsReceived: 1400,
      totalTipsGiven: 300,
      joinedAt: Date.now() - 100000000
    }
  });
}
