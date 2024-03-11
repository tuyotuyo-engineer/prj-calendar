import { combineReducers } from 'redux';
import dateSlice from './date/slices';

const rootReducer = combineReducers({
  date: dateSlice.reducer,
});

export default rootReducer;
