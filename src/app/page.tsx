import StatusLabel, { Status } from '@/app/components/StatusLabel/StatusLabel';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl text-lime-300">Home Page</h1>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </main>
    </div>
  );
}
