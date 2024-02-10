import { IconUser } from '@/icons';
import { ChatUserHeadProps } from '../../chat.types';

export const ChatUserHead = ({chatUserName}: ChatUserHeadProps) => {
  return (
    <div className='flex h-[2rem] items-center gap-2 my-[0.5rem]'>
      <IconUser />
      <div className='text-custom-black font-normal'>{chatUserName}</div>
    </div>
  );
};
