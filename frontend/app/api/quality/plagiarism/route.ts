import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { title, content } = await req.json();
  // Mock check
  const isPlagiarized = title.toLowerCase().includes("copy");
  return NextResponse.json({ 
    score: isPlagiarized ? 85 : 0, 
    status: isPlagiarized ? 'flagged' : 'clean' 
  });
}
