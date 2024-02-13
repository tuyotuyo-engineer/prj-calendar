'use client';
import { IconUser, SubmitIcon } from '@/icons';
import React from 'react';
import { ChatUserHead } from './molecules/ChatUserHead';
import { ChatDate } from './atoms/ChatDate';
import { ChatMessage } from './molecules/ChatMessage';
import { ChatMyMessage } from './molecules/ChatMyMessage';
import { MessageForm } from './molecules/MessageForm';
import dayjs from 'dayjs';

const mockData = {
  userName: '山田 太郎',
  specificDateTime: dayjs(),
  message: '今日はPHPの勉強をします!',
  };

// 日付のみをフォーマット
const datePart = mockData.specificDateTime.format('YYYY-MM-DD');
// 時刻のみをフォーマット
const timePart = mockData.specificDateTime.format('HH:mm');

export function Chat() {
  return (
    <div className='section-base flex flex-col w-[32rem] px-4 pt-8 pb-4 rounded-[25px]'>
      <div className='w-full h-[45.6rem]'>
        <ChatDate dateTime={datePart} />
        <ChatUserHead chatUserName={mockData.userName} />
        <ChatMessage message={mockData.message} time={timePart} />
        <ChatMyMessage message={mockData.message} time={timePart} />
      </div>
      <MessageForm />
    </div>
  );
}