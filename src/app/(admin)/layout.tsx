import React from 'react';
import Sidebar from '@/app/components/Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </div>
  );
}
