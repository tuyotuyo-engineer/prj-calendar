'use client';
import { IconUser, SubmitIcon } from '@/icons';
import React from 'react';
import { ChatUserHead } from './atoms/ChatUserHead';
import { ChatDate } from './atoms/ChatDate';
import { ChatMessage } from './atoms/ChatMessage';
import { ChatMyMessage } from './atoms/ChatMyMessage';
import { MessageForm } from './atoms/MessageForm';

const message = '今日はPHPの勉強をします!';
const time = '12:00';
const chatUserName = '山田 太郎';
const dateTime = `2024.02.10`;

function Chat() {
  return (
    <div className='w-[32rem] bg-white/75 rounded-[25px] border-solid border-[3px] border-white flex-col py-[1rem] px-[1rem]'>
      <div className='w-full h-[45.6rem] bg-custom-gray'>
        <ChatDate dateTime={dateTime}/>
        <ChatUserHead chatUserName={chatUserName} />
        <ChatMessage message={message} time={time}/>
        <ChatMyMessage message={message} time={time}/>
      </div>
      <MessageForm />
    </div>
  );
}

export default Chat;
