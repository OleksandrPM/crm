import React from 'react';
import Head from 'next/head';
import './globals.css';
import favicon from '../../public/favicon.ico';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
