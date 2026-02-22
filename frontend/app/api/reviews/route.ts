import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const resourceId = searchParams.get('resourceId');

  return NextResponse.json({
    reviews: [
      { id: "1", resourceId: Number(resourceId), reviewer: "ST1...3", rating: 5, comment: "Amazing!", createdAt: Date.now() }
    ]
  });
}
