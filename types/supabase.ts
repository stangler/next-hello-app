export interface Message {
  id: number;
  content: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: Message;
        Insert: {
          content: string;
          created_at?: string;
        };
        Update: {
          content?: string;
          created_at?: string;
        };
      };
    };
  };
}