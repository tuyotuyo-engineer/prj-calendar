import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-5xl font-bold'>
      <Link href={'/calendar'}>Calendar</Link>
    </div>
  );
}
