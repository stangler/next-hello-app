export interface Greeting {
  id: number;
  message: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  status: number;
}

export interface Database {
  public: {
    Tables: {
      greetings: {
        Row: Greeting;
        Insert: Omit<Greeting, 'id' | 'created_at' | 'updated_at'> & {
          message: string;
        };
        Update: Partial<Greeting>;
      };
    };
  };
}