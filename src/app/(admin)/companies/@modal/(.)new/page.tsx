'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import CompanyForm from '@/app/components/CompanyForm';
import Modal from '@/app/components/Modal';

// export interface PageProps {}

export default function Page() {
  const router = useRouter();
  return (
    <Modal show={true} onCloseAction={() => router.back()}>
      <CompanyForm onSubmitAction={console.log} />
    </Modal>
  );
}
