'use client';

import { useState, useEffect } from 'react';

function generateVisitorId(): string {
  return 'v_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

export function useVisitorId(): string | null {
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for existing ID
    let id = localStorage.getItem('referee_visitor_id');

    if (!id) {
      id = generateVisitorId();
      localStorage.setItem('referee_visitor_id', id);
    }

    setVisitorId(id);
  }, []);

  return visitorId;
}
