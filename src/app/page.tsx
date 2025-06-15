"use client";

import React from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";
import Quill from "@/components/icons/Quill";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 flex items-center justify-center p-6">
      <Card className="max-w-3xl w-full shadow-xl shadow-indigo-900/40">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md select-none">
            <Quill className="h-8 w-8 stroke-current" />
            AI Poem Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter a topic for your poem..."
              className="flex-grow text-gray-900 placeholder-gray-400"
              disabled={status === "streaming"}
              aria-label="Poem topic input"
              required
            />
            <Button type="submit" disabled={status !== "ready"} className="flex-shrink-0">
              {status === "streaming" ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Poem"
              )}
            </Button>
          </form>

          <ScrollArea className="h-[400px] rounded border border-gray-300 p-6 bg-white bg-opacity-90 shadow-inner font-serif text-gray-900 whitespace-pre-wrap">
            <div className="space-y-6">
              {messages.length === 0 && (
                <p className="text-center text-gray-500 select-none">
                  Your generated poem will appear here.
                </p>
              )}
              {messages.length > 0 && messages.slice(-2).map((m: { id: string; role: string; content: string }) => {
                if (m.role === "assistant") {
                  return (
                    <div
                      key={m.id}
                      aria-live="polite"
                      className="animate-fadeIn"
                    >
                      {m.content}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
