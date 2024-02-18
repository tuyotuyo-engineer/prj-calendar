import { UserSchedule } from './components/organisms/UserSchedule';

// 以下モックデータ
const USERS_SCHEDULE1 = {
  userName: 'Tarou Yamada',
};
const USERS_SCHEDULE2 = {
  userName: 'Hanako Tanaka',
};
const USERS_SCHEDULE3 = {
  userName: 'Jirou Suzuki',
};
const SCHEDULE_DATA = [USERS_SCHEDULE1, USERS_SCHEDULE2, USERS_SCHEDULE3];

export const Schedule = () => {
  return (
    <div className='w-full h-full min-w-[40rem] border-[0.3rem] rounded-[2.5rem] border-white/75 flex flex-col justify-center items-center bg-white overflow-y-scroll p-8'>
      <div className='flex gap-24 px-8 overflow-x-scroll'>
        {SCHEDULE_DATA.map((userSchedule, index) => (
          <UserSchedule key={index} userName={userSchedule.userName} />
        ))}
      </div>
    </div>
  );
};
