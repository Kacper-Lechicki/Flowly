import type { Metadata } from 'next';
import './globals.css';
import React, { ReactElement } from 'react';
import { ThemeProvider } from '@/providers/theme-provider';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Flowly',
  description: 'Automate Your Work With Flowly.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
