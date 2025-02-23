'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '../Button';

// dynamic import by next
const CompanyFormModal = dynamic(() => import('../CompanyFormModal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmitAction={console.log}
        show={show}
        onCloseAction={() => setShow(false)}
      />
    </>
  );
}
