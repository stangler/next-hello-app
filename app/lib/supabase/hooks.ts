"use client"

import { useState, useEffect } from 'react';
import { fetchGreeting } from './queries';
import { Greeting } from './types';

export const useGreeting = () => {
  const [greeting, setGreeting] = useState<Greeting | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadGreeting = async () => {
      try {
        setLoading(true);
        const data = await fetchGreeting();

        if (data) {
          setGreeting(data);
        } else {
          // Fallback to default greeting if no data exists
          setGreeting({
            id: 1,
            message: 'Hello Next',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          });
        }
      } catch (err) {
        setError(err as Error);
        // Fallback to default greeting on error
        setGreeting({
          id: 1,
          message: 'Hello Next',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
      } finally {
        setLoading(false);
      }
    };

    loadGreeting();
  }, []);

  return { greeting, loading, error };
};