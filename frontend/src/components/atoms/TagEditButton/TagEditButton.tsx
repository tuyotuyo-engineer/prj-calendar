'use client';

import { Button } from '../Button/Button.atom';

export const TagEditButton = () => {
  return (
    <Button
      variant='primary'
      className='w-full h-[6rem] border-[0.3rem] border-white rounded-[3rem] bg-white/75 shadow-sm'
      onClick={() => console.log('タグフォームのモーダルオープン')}
    >
      <p className='font-normal text-[2rem] text-custom-black flex justify-center items-center'>
        スケジュールタグ設定
      </p>
    </Button>
  );
};
