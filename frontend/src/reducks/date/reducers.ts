import { DateStateType } from './types';

const reducers = {
  nextMonth: (state: DateStateType) => {
    const newDate = new Date(state.currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    return {
      ...state,
      currentDate: newDate.toISOString(),
    };
  },
  prevMonth: (state: DateStateType) => {
    const newDate = new Date(state.currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    return {
      ...state,
      currentDate: newDate.toISOString(),
    };
  },
};

export const dateReducers = {
  reducers,
};
