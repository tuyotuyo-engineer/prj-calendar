import { IconUser } from '@/icons';

const chatUserName = 'Hoge Foo';

export const ChatUserHead = () => {
  return (
    <div className='flex h-[2rem] items-center gap-2 my-[0.5rem]'>
      <IconUser />
      <div className='text-custom-black font-normal'>{chatUserName}</div>
    </div>
  );
};
