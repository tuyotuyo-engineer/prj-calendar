import { store } from '../store';
import { nextDay, nextMonth, prevDay, prevMonth, updateDate } from './slices';

export const useNextDay = () => {
  store.dispatch(nextDay());
};

export const useNextMonth = () => {
  store.dispatch(nextMonth());
};

export const usePrevDay = () => {
  store.dispatch(prevDay());
};

export const usePrevMonth = () => {
  store.dispatch(prevMonth());
};

export const useUpdateDate = (date: string) => {
  store.dispatch(updateDate(date));
};
