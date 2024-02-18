import { ChatMessageProps } from '../../chat.types';

export const ChatMyMessage = ({ message, time }: ChatMessageProps) => {
  return (
    <div className='flex items-end justify-end space-x-2 mb-[0.8rem]'>
      <p className='text-[10px] text-light-gray'>{time}</p>
      <div className='bg-white rounded-[18px] py-[6px] px-4 border-custom-gray'>
        <p className='font-normal text-custom-black'>{message}</p>
      </div>
    </div>
  );
};
