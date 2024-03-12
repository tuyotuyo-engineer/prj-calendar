import { dateSelector } from '@/reducks/date/selectors';

export const DateDisplay = () => {
  const { date } = dateSelector();

  const formatDate = (date: string): string => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    return `${year}年 ${month.toString().padStart(2, '0')}月`;
  };

  const formatedDate = formatDate(date);
  return (
    <div>
      <p>{formatedDate}</p>
    </div>
  );
};
