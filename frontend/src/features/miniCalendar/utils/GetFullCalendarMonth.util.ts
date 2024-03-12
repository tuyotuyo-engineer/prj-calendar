export type DayInfoType = {
  date: number;
  dayOfWeek: string;
  monthOffset: number;
  dateObject: Date;
};

export const GetFullCalendarMonth = (dateStr: string): DayInfoType[] => {
  const inputDate = new Date(dateStr);
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth();
  const days: DayInfoType[] = [];

  let date = new Date(year, month, 1);
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }

  for (let i = 0; i < 42; i++) {
    const dayInfo: DayInfoType = {
      date: date.getDate(),
      dayOfWeek: date.toLocaleString('ja-JP', { weekday: 'long' }),
      monthOffset: date.getMonth() - month,
      dateObject: new Date(date),
    };
    days.push(dayInfo);
    date.setDate(date.getDate() + 1);
  }
  return days;
};
