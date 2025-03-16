import React from 'react';
import MagicButton from '@/app/components/MagicButton';

export interface PageProps {
  params: object;
}

export default function Page() {
  return (
    <>
      <div>Dashboard</div>
      <MagicButton />
    </>
  );
}
