'use client';
import React from 'react';
import { ChatDate } from './atoms/ChatDate.atom';
import { ChatMessage } from './molecules/ChatMessage.molecules';
import { MessageForm } from './molecules/MessageForm.molecules';
import { UserType } from '../chat.types';
import dayjs from 'dayjs';
import { ChatHistory } from './organisms/ChatHistory.organisms';

const mockData1 = {
  userType: UserType.Other,
  userName: '山田 太郎',
  specificDateTime: dayjs(),
  message: '今日はPHPの勉強をします!',
};

const mockData2 = {
  userType: UserType.Self,
  userName: '田中 一郎',
  specificDateTime: dayjs().add(5, 'minute'),
  message: '頑張ってください!',
};

const mockData = new Array(7).fill([mockData1, mockData2]).flat();

// 日付のみをフォーマット
const datePart = mockData1.specificDateTime.format('YYYY-MM-DD');
// 時刻のみをフォーマット
const timePart = mockData1.specificDateTime.format('HH:mm');

export function Chat() {
  return (
    <div className='section-base flex flex-col w-[32rem] px-2 pt-8 pb-4 rounded-[25px]'>
      <div className='w-full h-[45.6rem] overflow-y-scroll'>
        <ChatDate dateTime={datePart} />
        <ChatHistory mockData={mockData} />
      </div>
      <MessageForm />
    </div>
  );
}
