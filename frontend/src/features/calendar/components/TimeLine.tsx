import { Tasks } from './Tasks';

// 時間軸のリストを作成する関数
function createTimesList() {
  const times = [];
  for (let hour = 1; hour <= 24; hour++) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return times;
}

const times = createTimesList();

export const TimeLine = () => {
  return (
    <div className='w-full min-w-[34rem] max-w-[40rem] bg-white h-full flex flex-col relative'>
      {times.map((time, i) => (
        <div key={i} className='flex gap-4 w-full'>
          <div className='flex text-custom-black text-[1rem] items-center justify-center'>
            <div className='flex w-[3rem] justify-center items-center h-[4rem]'>
              {time}
            </div>
          </div>
          <div className='w-full flex items-center justify-center my-[1.9rem] bg-border-gray-light h-[0.1rem] ' />
        </div>
      ))}
      <div className='absolute left-[6rem]'>
        <Tasks />
      </div>
      <div className='absolute right-[2rem]'>
        <Tasks />
      </div>
    </div>
  );
};
