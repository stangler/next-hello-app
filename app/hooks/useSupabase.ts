'use client';

import { createClient } from '@supabase/supabase-js';
import { useMemo } from 'react';

const useSupabase = () => {
  const supabase = useMemo(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // For development without proper Supabase credentials, return a mock client
    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your-project-ref') || supabaseKey.includes('your-anon-key')) {
      console.warn('Using mock Supabase client - configure .env.local for real Supabase connection');
      return {
        from: () => ({
          select: () => ({
            order: () => ({
              limit: () => Promise.resolve({ data: [{ id: 1, content: 'Hello Next', created_at: '2023-01-01T00:00:00Z' }], error: null })
            })
          })
        })
      };
    }

    return createClient(supabaseUrl, supabaseKey);
  }, []);

  return supabase;
};

export default useSupabase;