import { UserHead } from '@/components/molecules/UserHead';
import { TimeLine } from '../molecule.tsx/TimeLine';
import { UserScheduleProps } from '../../types';

export const UserSchedule = ({ userName }: UserScheduleProps) => {
  return (
    <div className='flex flex-col w-[30rem]'>
      <div className='flex justify-center mb-[1rem]'>
        <UserHead userName={userName} />
      </div>
      <TimeLine />
    </div>
  );
};
