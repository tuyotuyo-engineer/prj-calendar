import { useNextMonth, usePrevMonth } from '@/reducks/date/dispatches';
import { Button } from '@/components/atoms/Button/Button.atom';
import { ArrowIcon } from '@/components/icons/Arrow/Arrow.icon';
import { DateDisplay } from '../../atoms/DateDisplay/DateDisplay.atom';

export const MiniCalendarHead = () => {
  const handlePrev = () => {
    usePrevMonth();
  };
  const handleNext = () => {
    useNextMonth();
  };
  return (
    <div className='flex items-center justify-between'>
      <Button onClick={handlePrev} variant='none'>
        <ArrowIcon direction='left' />
      </Button>
      <DateDisplay />
      <Button onClick={handleNext} variant='none'>
        <ArrowIcon direction='right' />
      </Button>
    </div>
  );
};
