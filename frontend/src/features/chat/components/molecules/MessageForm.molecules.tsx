import { useState } from 'react';
import { SubmitIcon } from '@/icons';
import { MessageFormType } from '../../chat.types';
import { Button } from '@/components/atoms/Button/Button.atom';

export const MessageForm = () => {
  const [message, setMessage] = useState<MessageFormType['message']>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form className='flex justify-between items-center mt-[1rem] bg-white/50 rounded-[1.8rem] border border-gray-200'>
      <input
        className='w-full h-[4rem] rounded-l-[1.8rem] py-[1rem] px-[1.2rem] outline-none'
        placeholder='メッセージを入力'
        value={message}
        onChange={handleInputChange}
      />
      <Button
        onClick={() => console.log('click')}
        variant='primary'
        className='p-[1rem] rounded-r-[1.8rem]'
      >
        <SubmitIcon />
      </Button>
    </form>
  );
};
