import { UserSchedule } from './components/UserSchedule';

export const Schedule = () => {
  return (
    <div className='w-full h-full min-w-[40rem] border-[0.3rem] rounded-[2.5rem] border-white/75 flex flex-col justify-center items-center bg-white overflow-y-scroll p-8'>
      <div className='flex gap-24 px-8 overflow-x-scroll'>
        <UserSchedule />
        <UserSchedule />
        <UserSchedule />
      </div>
    </div>
  );
};
