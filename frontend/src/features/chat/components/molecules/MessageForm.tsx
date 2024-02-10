import { useState } from 'react';
import { SubmitIcon } from "@/icons";
import { MessageFormProps } from "../../chat.types";

export const MessageForm = () => {
  const [message, setMessage] = useState<MessageFormProps['message']>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className='flex justify-between items-center mt-[1rem] bg-white/50 rounded-[18px] border border-gray-200'>
      <input
        className='w-full h-[4rem] rounded-l-[18px] py-[1rem] px-[1.2rem] outline-none'
        placeholder='メッセージを入力'
        value={message}
        onChange={handleInputChange}
      />
      <button className='p-[1rem] rounded-r-[18px]'>
        <SubmitIcon />
      </button>
    </div>
  );
};
