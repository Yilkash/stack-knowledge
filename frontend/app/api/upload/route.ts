import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Mock upload to IPFS
    const mockHash = "Qm" + Math.random().toString(36).substring(7);
    return NextResponse.json({ success: true, url: `ipfs://${mockHash}` });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
