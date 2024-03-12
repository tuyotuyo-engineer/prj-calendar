import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const dateSelector = () => {
  const state = useSelector((state: RootState) => state.date);

  return {
    date: state.currentDate,
  };
};
