import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hello Next App',
  description: 'A Next.js application displaying Hello Next',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}