import { ChatDateProps } from '../../chat.types';

export const ChatDate = ({dateTime}: ChatDateProps) => {
  return (
    <div className='flex justify-center items-center h-[1rem] rounded-[1.8rem] bg-white/50 max-w-max mx-auto p-4'>
      <p className='font-normal text-[10px] text-light-gray'>{dateTime}</p>
    </div>
  );
};
