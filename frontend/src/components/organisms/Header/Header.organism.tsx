'use client';
import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton.atom';
import { UserIcon } from '@/components/icons/UserIcon/User.icon';
import { CurrentDate } from '@/components/atoms/CarrentDate/CurrentDate.atom';
import { Button } from '@/components/atoms/Button/Button.atom';
import { ArrowIcon } from '@/components/icons/Arrow/Arrow.icon';
import { Logo } from '@/components/atoms/Logo/Logo.atom';
import {
  useNextDay,
  usePrevDay,
  useUpdateDate,
} from '@/reducks/date/dispatches';

export const Header = () => {
  return (
    <header className='section-base flex items-center justify-between px-12 py-9 rounded-full'>
      <div className='flex-center gap-12'>
        <HamburgerButton onOpen={false} />
        <UserIcon />
        <CurrentDate />
        <Button
          onClick={() => {
            useUpdateDate(new Date().toISOString());
          }}
          variant='header'
        >
          今日
        </Button>
        <div className='flex gap-12'>
          <Button
            onClick={() => {
              usePrevDay();
            }}
            variant='none'
          >
            <ArrowIcon direction='left' />
          </Button>
          <Button
            onClick={() => {
              useNextDay();
            }}
            variant='none'
          >
            <ArrowIcon direction='right' />
          </Button>
        </div>
      </div>
      <div>
        <Logo />
      </div>
    </header>
  );
};
