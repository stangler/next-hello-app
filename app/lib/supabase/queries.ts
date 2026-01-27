import { supabase } from './client';
import { Greeting } from './types';

export const fetchGreeting = async (): Promise<Greeting | null> => {
  try {
    const { data, error } = await supabase
      .from('greetings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching greeting:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error fetching greeting:', error);
    return null;
  }
};

export const createGreeting = async (message: string): Promise<Greeting | null> => {
  try {
    const { data, error } = await supabase
      .from('greetings')
      .insert([{ message }])
      .select()
      .single();

    if (error) {
      console.error('Error creating greeting:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error creating greeting:', error);
    return null;
  }
};