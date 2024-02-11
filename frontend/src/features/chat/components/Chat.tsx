'use client';
import { IconUser, SubmitIcon } from '@/icons';
import React from 'react';
import { UserHead } from '../../../components/molecules/UserHead';
import { ChatDate } from './atoms/ChatDate';
import { ChatMessage } from './molecules/ChatMessage';
import { ChatMyMessage } from './molecules/ChatMyMessage';
import { MessageForm } from './molecules/MessageForm';

const message = '今日はPHPの勉強をします!';
const time = '12:00';
const chatUserName = '山田 太郎';
const dateTime = `2024.02.10`;

function Chat() {
  return (
    <div className='w-[32rem] bg-white/75 rounded-[25px] border-custom-gray border-[3px] flex-col py-[1rem] px-[1rem]'>
      <div className='w-full h-[45.6rem]'>
        <ChatDate dateTime={dateTime} />
        <UserHead userName={chatUserName} />
        <ChatMessage message={message} time={time} />
        <ChatMyMessage message={message} time={time} />
      </div>
      <MessageForm />
    </div>
  );
}

export default Chat;
