import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const owner = searchParams.get('owner');

    return NextResponse.json({
        collections: [
            { id: "c1", name: "Calculus Prep", description: "Best notes for finals", owner, resourceIds: [1, 2], isPublic: true }
        ]
    });
}
