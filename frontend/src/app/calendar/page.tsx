import { Header } from '@/components/organisms/Header/Header.organism';
import { Schedule } from '@/features/calendar/Schedule';
import Chat from '@/features/chat/components/Chat';

export default function Calendar() {
  return (
    <main className='flex flex-col gap-8 h-screen px-12 py-16 bg-red-400'>
      <Header />
      <div className='flex h-full'>
        <div className='flex flex-col w-[32rem] bg-yellow-300'></div>
        <div className='w-full bg-blue-300 px-[4rem]'>
          <Schedule />
        </div>
        <div className='flex flex-col w-[32rem] bg-green-300'>
          <Chat />
        </div>
      </div>
    </main>
  );
}
