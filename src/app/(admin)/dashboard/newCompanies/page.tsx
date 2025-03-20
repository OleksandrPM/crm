import React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New Companies</Header>
      <div>Some Additional Info</div>
    </>
  );
}
