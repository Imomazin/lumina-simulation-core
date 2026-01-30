import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lumina Simulation | Cross-Functional Business Simulation',
  description: 'The most advanced business simulation for strategy, leadership, and decision-making. A live, cross-functional enterprise simulation for MBA capstones and corporate training.',
  keywords: ['business simulation', 'MBA', 'strategy', 'leadership', 'executive education', 'corporate training'],
  authors: [{ name: 'Ambidexters Inc' }],
  openGraph: {
    title: 'Lumina Simulation',
    description: 'Run the company. Feel the consequences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
