import { store } from '../store';
import { nextMonth, prevMonth, updateDate } from './slices';

export const useNextMonth = () => {
  store.dispatch(nextMonth());
};

export const usePrevMonth = () => {
  store.dispatch(prevMonth());
};

export const useUpdateDate = (date: string) => {
  store.dispatch(updateDate(date));
};
