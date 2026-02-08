import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages, documentId } = await req.json();

        // TODO: Connect to OpenAI and RAG pipeline here
        // For now, return a mock response

        const lastMessage = messages[messages.length - 1];
        const mockResponse = `[AI Analysis of Document ${documentId}]: You asked "${lastMessage.content}". Based on the provided PDF, the answer is... (This is a mock response from the API).`;

        return NextResponse.json({
            role: 'assistant',
            content: mockResponse
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
