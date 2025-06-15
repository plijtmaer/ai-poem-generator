# AI Poem Generator

A Next.js application that generates creative poems using OpenAI's GPT-4 model. Built as part of the Agent Engineering Bootcamp (Homework 1).

## Features

- Real-time poem generation using AI
- Streaming responses for immediate feedback
- Modern, responsive UI with Tailwind CSS
- Error handling and loading states

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel AI SDK
- OpenAI API

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=your-api-key-here
```

4. Run the development server:
```bash
pnpm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter a topic or theme for your poem in the input field
2. Click "Generate a Poem" to create a new AI-generated poem
3. The poem will stream in real-time as it's being generated

## Project Structure

- `src/app/page.tsx` - Main application component with the poem generator UI
- `src/app/api/chat/route.ts` - API route handling OpenAI interactions
- Styling with Tailwind CSS classes

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)

## Notes

- Make sure to never commit your `.env.local` file
- The application uses the GPT-4 Turbo model for optimal poem generation
