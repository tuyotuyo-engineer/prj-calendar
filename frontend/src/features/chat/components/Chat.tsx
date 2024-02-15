'use client';
import React from 'react';
import { ChatDate } from './atoms/ChatDate';
import { ChatMessage } from './molecules/ChatMessage';
import { MessageForm } from './molecules/MessageForm';
import { UserType } from '../chat.types';
import dayjs from 'dayjs';

const mockData1 = {
  userType: UserType.Other,
  userName: '山田 太郎',
  specificDateTime: dayjs(),
  message: '今日はPHPの勉強をします!',
};

const mockData2 = {
  userType: UserType.Self,
  userName: '田中 一郎',
  specificDateTime: dayjs(),
  message: '頑張ってください!',
};

const mockData = [mockData1, mockData2];

// 日付のみをフォーマット
const datePart = mockData1.specificDateTime.format('YYYY-MM-DD');
// 時刻のみをフォーマット
const timePart = mockData1.specificDateTime.format('HH:mm');

export function Chat() {
  return (
    <div className='section-base flex flex-col w-[32rem] px-4 pt-8 pb-4 rounded-[25px]'>
      <div className='w-full h-[45.6rem]'>
        <ChatDate dateTime={datePart} />
        <ChatMessage mockData={mockData} />
      </div>
      <MessageForm />
    </div>
  );
}
