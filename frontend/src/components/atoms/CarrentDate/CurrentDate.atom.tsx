import { dateSelector } from '@/reducks/date/selectors';

export const CurrentDate = () => {
  const { date: currentDate } = dateSelector();
  const date = new Date(currentDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}年 ${month}月 ${day}日`;
  return (
    <div>
      <p className='text-[2rem]'>{formattedDate}</p>
    </div>
  );
};
