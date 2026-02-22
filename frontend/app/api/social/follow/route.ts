import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { follower, following, action } = await req.json();
  // Hybrid logic: Storage would usually be a DB or on-chain event
  console.log(`${follower} is now ${action === 'follow' ? 'following' : 'unfollowing'} ${following}`);
  return NextResponse.json({ success: true });
}
