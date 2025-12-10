import { useState } from 'react';

interface RefGodResponse {
  answer: string;
  sources: {
    section_id: string;
    section_name: string;
    similarity: number;
  }[];
}

export function useRefGod() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<RefGodResponse | null>(null);

  const askRefGod = async (question: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ref-god', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error('Failed to get answer');
      }

      const data = await res.json();
      setResponse(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { askRefGod, loading, error, response };
}
