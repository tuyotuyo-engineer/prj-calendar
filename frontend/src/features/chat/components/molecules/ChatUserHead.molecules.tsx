import { IconUser } from '@/icons';
import { ChatUserHeadType } from '../../chat.types';

export const ChatUserHead = ({chatUserName}: ChatUserHeadType) => {
  return (
    <div className='flex h-[2rem] items-center mb-2 my-[0.5rem] gap-2'>
      <IconUser />
      <div className='text-custom-black font-normal'>{chatUserName}</div>
    </div>
  );
};
