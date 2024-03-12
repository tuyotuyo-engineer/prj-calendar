import { PayloadAction } from '@reduxjs/toolkit';
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
  updateDate: (state: DateStateType, action: PayloadAction<string>) => {
    return {
      ...state,
      currentDate: action.payload,
    };
  },
};

export const dateReducers = {
  reducers,
};
