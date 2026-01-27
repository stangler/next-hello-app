'use client';

import { Message } from '../../../types/supabase';

const useMessage = (): { message: Message | null; loading: boolean; error: string | null } => {
  return {
    message: { id: 1, content: 'Hello Next', created_at: '2023-01-01T00:00:00Z' },
    loading: false,
    error: null
  };
};

export default useMessage;