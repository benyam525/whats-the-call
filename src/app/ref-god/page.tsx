'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useRefGod } from '@/hooks/useRefGod';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  sources?: {
    section_id: string;
    section_name: string;
    similarity: number;
  }[];
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What is a flagrant foul?",
  "When can a coach challenge a call?",
  "What is the gather step rule?",
  "How does the shot clock work after an offensive rebound?",
  "What constitutes a technical foul?",
];

function RefGodContent() {
  const searchParams = useSearchParams();
  const { askRefGod, loading } = useRefGod();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [initialQuestionHandled, setInitialQuestionHandled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle initial question from URL param
  useEffect(() => {
    const q = searchParams.get('q');
    if (q && !initialQuestionHandled && messages.length === 0) {
      setInitialQuestionHandled(true);
      handleSubmit(q);
    }
  }, [searchParams, initialQuestionHandled, messages.length]);

  const handleSubmit = async (question: string) => {
    if (!question.trim() || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: question.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const response = await askRefGod(question);

    if (response) {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        type: 'assistant',
        content: response.answer,
        sources: response.sources,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } else {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        type: 'assistant',
        content: "I'm sorry, I couldn't process that question. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(input);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-brand-border flex-shrink-0">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/RuleVisionv2.png"
              alt="RuleVision"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-brand-gray hover:text-brand-black transition-colors">
              Home
            </Link>
            <Link href="/leaderboard" className="text-brand-gray hover:text-brand-black transition-colors">
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 ? (
            // Welcome state with suggestions
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-brand-card border border-brand-border flex items-center justify-center">
                <span className="text-5xl">🏀</span>
              </div>
              <h1 className="text-3xl font-bold text-brand-black mb-3 tracking-tight">Ref God</h1>
              <p className="text-brand-gray mb-10 max-w-md mx-auto leading-relaxed">
                I&apos;m trained on the complete 2025-26 NBA rulebook. Ask me anything about NBA rules, officiating, or game situations.
              </p>

              <div className="space-y-4">
                <p className="text-sm text-brand-gray font-medium">Try asking:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubmit(q)}
                      disabled={loading}
                      className="px-4 py-2.5 bg-brand-card border border-brand-border rounded-full text-sm text-brand-black hover:bg-gray-100 hover:border-gray-300 transition-all disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Messages
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                    message.type === 'user'
                      ? 'bg-brand-black text-white'
                      : 'bg-brand-card border border-brand-border'
                  }`}
                >
                  {message.type === 'assistant' && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">🏀</span>
                      <span className="text-sm font-semibold text-brand-black">Ref God</span>
                    </div>
                  )}
                  <p className={`whitespace-pre-wrap leading-relaxed ${
                    message.type === 'user' ? 'font-medium' : 'text-brand-black'
                  }`}>
                    {message.content}
                  </p>

                  {/* Sources */}
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-brand-border">
                      <p className="text-xs text-brand-gray font-medium uppercase tracking-wider mb-2">
                        Sources
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {message.sources.map((source, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-brand-border rounded-md text-xs"
                            title={`Similarity: ${(source.similarity * 100).toFixed(1)}%`}
                          >
                            <span className="font-semibold text-brand-black">{source.section_id}</span>
                            <span className="text-brand-gray">·</span>
                            <span className="text-brand-gray">{source.section_name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-brand-card border border-brand-border rounded-2xl px-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🏀</span>
                  <span className="text-sm font-semibold text-brand-black">Ref God</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-sm text-brand-gray">Consulting the rulebook...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 border-t border-brand-border bg-white px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about any NBA rule..."
              disabled={loading}
              className="flex-1 bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-black placeholder:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent disabled:opacity-50"
            />
            <button
              onClick={() => handleSubmit(input)}
              disabled={!input.trim() || loading}
              className="px-6 py-3 bg-brand-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                'Ask'
              )}
            </button>
          </div>
          <p className="text-center text-xs text-brand-gray mt-3">
            Powered by the official NBA 2025-26 Rulebook
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RefGodPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-black"></div>
      </div>
    }>
      <RefGodContent />
    </Suspense>
  );
}
