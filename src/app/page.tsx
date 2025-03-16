// import { StatusLabel, Status } from './components/StatusLabel';
import AddCompanyButton from './components/AddCompanyButton';
import MagicButton from '@/app/components/MagicButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Home Page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
