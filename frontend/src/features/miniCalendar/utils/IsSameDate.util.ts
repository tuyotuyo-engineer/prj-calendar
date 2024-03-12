export const isSameDate = (currentDateStr: string, date: Date) => {
  const currentDate = new Date(currentDateStr);

  return (
    currentDate.getFullYear() === date.getFullYear() &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getDate() === date.getDate()
  );
};
