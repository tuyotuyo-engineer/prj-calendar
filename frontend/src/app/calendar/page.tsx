'use client'
import { Button } from '@/components/atoms/Button/Button.atom';
import { Header } from '@/components/organisms/Header/Header.organism';
import Chat from '@/features/chat/components/Chat';

export default function Calendar() {
  return (
    <main className='flex flex-col gap-8 h-screen px-12 py-16 bg-red-400'>
      <Header />
      <div className='flex h-full'>
        <div className='flex flex-col w-[32rem] bg-yellow-300'></div>
        <div className='flex w-full bg-blue-300'></div>
        <div className='flex flex-col w-[32rem] bg-green-300 gap-16'>
          <Button
            variant='tagEdit'
            className='w-full h-[6rem] border-[0.3rem] border-white rounded-[3rem] bg-white/75 shadow-sm'
            onClick={() => console.log('タグフォームのモーダルオープン')}
          >
            <p className='font-normal text-[2rem] text-custom-black flex justify-center items-center'>
              スケジュールタグ設定
            </p>
          </Button>
          <Chat />
        </div>
      </div>
    </main>
  );
}
