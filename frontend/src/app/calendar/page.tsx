'use client';
import { Button } from '@/components/atoms/Button/Button.atom';
import { Header } from '@/components/organisms/Header/Header.organism';
import Chat from '@/features/chat/components/Chat';

export default function Calendar() {
  return (
    <main className='flex flex-col gap-16 h-screen px-12 py-16 bg-red-400'>
      <Header />
      <div className='flex h-full'>
        <div className='flex flex-col w-[32rem] bg-yellow-300'></div>
        <div className='flex w-full bg-blue-300'></div>
        <div className='flex flex-col gap-16 w-[32rem] bg-green-300'>
          <Button
            variant='tagEdit'
            className='section-base'
            onClick={() => console.log('タグフォームのモーダルオープン')}
          >
            スケジュールタグ設定
          </Button>
          <Chat />
        </div>
      </div>
    </main>
  );
}
