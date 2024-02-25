import { ChatDateType } from '../../chat.types';

export const ChatDate = ({dateTime}: ChatDateType) => {
  return (
    <div className='flex justify-center items-center h-6 rounded-[1.8rem] bg-white/50 max-w-max mx-auto p-4 mb-[0.8rem]'>
      <p className='font-normal text-[1rem] text-light-gray'>{dateTime}</p>
    </div>
  );
};
