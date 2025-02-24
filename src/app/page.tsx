// import { StatusLabel, Status } from './components/StatusLabel';
import AddCompanyButton from './components/AddCompanyButton';

export default function Home() {
  console.log(process.env.NODE_ENV);

  return (
    <main>
      <h1 className="text-4xl">Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
