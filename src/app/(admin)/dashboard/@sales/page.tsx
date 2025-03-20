import React from 'react';

import { getSummarySales } from '@/lib/api';

import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import MagicButton from '@/app/components/MagicButton';

// export interface PageProps {}

export type SalesType = {
  companyId: number;
  companyTitle: string;
  sold: number;
  income: number;
};

export default async function Page() {
  const data: SalesType[] = await new Promise((res) => {
    setTimeout(() => {
      res(getSummarySales());
    }, 4000);
  });

  return (
    <DashboardCard
      label={
        <>
          Sales details <MagicButton />
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
