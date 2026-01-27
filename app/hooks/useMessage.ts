'use client';

import { useState, useEffect } from 'react';
import useSupabase from './useSupabase';
import { Message } from '../../types/supabase';

const useMessage = () => {
  const supabase = useSupabase();
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setMessage(data[0]);
        }
      } catch (err) {
        console.error('Error fetching message:', err);
        if (err instanceof Error) {
          setError(`Failed to fetch message: ${err.message}`);
        } else {
          setError('Failed to fetch message: Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [supabase]);

  return { message, loading, error };
};

export default useMessage;