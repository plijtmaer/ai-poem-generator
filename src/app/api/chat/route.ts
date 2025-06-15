import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

// Initialize the OpenAI client with the API key
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const { messages } = await req.json();
    console.log('Received messages:', messages);

    const result = streamText({
      model: openai("gpt-4-turbo-preview"),
      system: "You are a creative AI poet who writes beautiful and meaningful poems.",
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}