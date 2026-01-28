import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
