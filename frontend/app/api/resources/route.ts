import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for initial implementation
  return NextResponse.json({
    resources: [
      { id: 1, title: "Resource 1", description: "Desc 1", uploader: "ST1...1", totalTips: 100, createdAt: Date.now(), url: "ipfs://1" },
      { id: 2, title: "Resource 2", description: "Desc 2", uploader: "ST1...2", totalTips: 200, createdAt: Date.now(), url: "ipfs://2" }
    ]
  });
}
