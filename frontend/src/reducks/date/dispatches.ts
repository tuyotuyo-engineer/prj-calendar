import { store } from '../store';
import { nextMonth, prevMonth } from './slices';

export const useNextMonth = () => {
  store.dispatch(nextMonth());
};

export const usePrevMonth = () => {
  store.dispatch(prevMonth());
};
