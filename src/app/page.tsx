// import { StatusLabel, Status } from './components/StatusLabel';
import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/AddCompanyButton';

export default function Home() {
  console.log(typeof headers());

  return (
    <main>
      <h1 className="text-4xl">Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
