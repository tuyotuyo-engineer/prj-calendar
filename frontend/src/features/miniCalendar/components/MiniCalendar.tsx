import { MiniCalendarHead } from './molecules/MiniCalendarHead/MiniCalendarHead.molecule';
import { MiniCalendarGrid } from './molecules/MiniCalendarGrid/MiniCalendarGrid.molecule';

export const MiniCalendar = () => {
  return (
    <div className='section-base flex flex-col gap-8 justify-between relative w-[32rem] rounded-[2.5rem] p-12'>
      <MiniCalendarHead />
      <MiniCalendarGrid />
    </div>
  );
};
