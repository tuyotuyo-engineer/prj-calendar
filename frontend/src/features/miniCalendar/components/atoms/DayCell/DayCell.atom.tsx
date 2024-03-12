import { Button } from '@/components/atoms/Button/Button.atom';
import { DayInfoType } from '@/features/miniCalendar/utils/GetFullCalendarMonth.util';
import { isSameDate } from '@/features/miniCalendar/utils/IsSameDate.util';
import { useUpdateDate } from '@/reducks/date/dispatches';
import clsx from 'clsx';

type Props = {
  currentDate: string;
  day: DayInfoType | string;
};

const className = 'flex items-center justify-center relative w-8';

export const DayCell = ({ currentDate, day }: Props) => {
  if (typeof day === 'string') {
    return (
      <div className={className}>
        <p>{day}</p>
      </div>
    );
  } else {
    const handleClick = () => {
      useUpdateDate(day.dateObject.toISOString());
    };
    return (
      <Button
        className={clsx(className, day.monthOffset !== 0 && 'opacity-50')}
        onClick={handleClick}
        variant='none'
      >
        <p className='relative z-10'>{day.date}</p>
        {isSameDate(currentDate, day.dateObject) && (
          <div
            className='absolute z-0 w-[3.2rem] h-[3.2rem] rounded-full bg-black opacity-10'
            style={{ transform: 'translateY(1.5px)' }}
          ></div>
        )}
      </Button>
    );
  }
};
