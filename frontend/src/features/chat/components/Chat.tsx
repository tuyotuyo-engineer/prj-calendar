'use client';
import { IconUser, SubmitIcon } from '@/icons';
import React from 'react';
import { ChatUserHead } from './atoms/ChatUserHead';
import { ChatDate } from './atoms/ChatDate';

function Chat() {
  return (
    <div className='w-[32rem] h-[536px] bg-white/75 rounded-[25px] border-solid border-[3px] border-white flex-col py-[2rem] px-[1rem]'>
      <div className='w-full h-[45.6rem] bg-custom-gray'>
        <ChatDate />
        <ChatUserHead />
      </div>
      <div className='flex justify-between items-center mt-[1rem] bg-white/50 rounded-[18px] border border-gray-200'>
        <input
          className='w-full h-[4rem] rounded-l-[18px] py-[1rem] px-[1.2rem] outline-none'
          placeholder='メッセージを入力'
        />
        <button className='p-[1rem] rounded-r-[18px]'>
          <SubmitIcon />
        </button>
      </div>
    </div>
  );
}

export default Chat;
