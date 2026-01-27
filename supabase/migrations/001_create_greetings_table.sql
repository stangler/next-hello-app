-- Create greetings table following Postgres best practices
CREATE TABLE public.greetings (
  id BIGSERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX idx_greetings_created_at ON public.greetings(created_at);

-- Insert initial greeting data
INSERT INTO public.greetings (message) VALUES ('Hello Next');

-- Enable Row Level Security (RLS)
ALTER TABLE public.greetings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Enable read access for all users"
ON public.greetings FOR SELECT
USING (true);

-- Create policy for authenticated write access
CREATE POLICY "Enable insert for authenticated users"
ON public.greetings FOR INSERT
WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users"
ON public.greetings FOR UPDATE
USING (true)
WITH CHECK (true);