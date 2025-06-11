import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import Head from 'next/head';
import { Providers } from '@/app/components/Providers';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
