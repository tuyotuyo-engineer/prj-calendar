import { ChatMessageProps } from '../../chat.types';

export const ChatMessage = ({ message, time }: ChatMessageProps) => {
  return (
    <div className='flex items-end space-x-2 mb-[0.8rem]'>
      <div className='bg-light-gray rounded-[18px] py-[6px] px-4'>
        <p className='font-normal text-white break-words'>{message}</p>
      </div>
      <p className='text-[10px] text-light-gray'>{time}</p>
    </div>
  );
};
