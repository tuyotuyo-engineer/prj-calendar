import { IconUser } from '@/icons';
import { UserHeadProps } from '@/types/types';

export const UserHead = ({ userName }: UserHeadProps) => {
  return (
    <div className='flex h-[2rem] items-center gap-2 my-[0.5rem]'>
      <IconUser />
      <div className='text-custom-black font-normal'>{userName}</div>
    </div>
  );
};
