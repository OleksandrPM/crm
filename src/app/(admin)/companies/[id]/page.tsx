'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = React.use(params);

  useEffect(() => {
    const idNumber = Number.parseInt(id);

    if (Number.isNaN(idNumber)) {
      // Redirect or handle invalid ID
      notFound();
    }
  }, [id]);

  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}
