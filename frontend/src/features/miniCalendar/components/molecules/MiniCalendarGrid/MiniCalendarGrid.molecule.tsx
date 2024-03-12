import { GetFullCalendarMonth } from '@/features/miniCalendar/utils/GetFullCalendarMonth.util';
import { DayCell } from '../../atoms/DayCell/DayCell.atom';
import { dateSelector } from '@/reducks/date/selectors';

const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

export const MiniCalendarGrid = () => {
  const { date } = dateSelector();
  const calendar = GetFullCalendarMonth(date);
  return (
    <div className='grid grid-cols-7 justify-between gap-8'>
      {weekdays.map((day, i) => (
        <DayCell currentDate={date} day={day} key={i} />
      ))}
      {calendar.map((day, i) => (
        <DayCell currentDate={date} day={day} key={i} />
      ))}
    </div>
  );
};
