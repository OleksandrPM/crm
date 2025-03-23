'use client';

import React from 'react';
import CompanyForm from '@/app/components/CompanyForm';

// export interface PageProps {}

export default function Page() {
  return (
    <div className="py-6 px-10">
      <CompanyForm
        onSubmitAction={() => console.log('CompanyForm has been submitted')}
      />
    </div>
  );
}
