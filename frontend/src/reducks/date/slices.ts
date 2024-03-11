import { createSlice } from '@reduxjs/toolkit';
import { initialDateState } from './initializes';
import { dateReducers } from './reducers';

const dateSlice = createSlice({
  name: 'date',
  initialState: initialDateState,
  reducers: dateReducers.reducers,
});

export const { nextMonth, prevMonth } = dateSlice.actions;
export default dateSlice;
