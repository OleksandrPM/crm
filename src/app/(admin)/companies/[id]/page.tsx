'use client';

import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params
      .then(({ id }) => {
        const idNumber = Number.parseInt(id);

        if (Number.isNaN(idNumber)) {
          // Redirect or handle invalid ID
          notFound();
        } else {
          setId(id);
        }
      })
      .catch(() => {
        notFound(); // Handle promise rejection
      });
  }, [params]);

  // Render nothing until 'id' is resolved
  if (!id) return null;

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
