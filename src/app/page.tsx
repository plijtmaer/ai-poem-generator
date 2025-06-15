"use client";

import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">AI Poem Generator</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a topic for your poem..."
          className="w-full p-2 mb-4 border rounded text-gray-700 placeholder-gray-500"
        />
        <button
          type="submit"
          disabled={status !== 'ready'}
          className="w-full bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        >
          {status === 'streaming' ? "Generating..." : "Generate a Poem"}
        </button>
      </form>

      <div className="space-y-4">
        {messages.map((m: { id: string; role: string; content: string }) => (
          <div key={m.id} className="mb-4">
            {m.role === "assistant" && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap font-serif text-gray-800">
                  {m.content}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
