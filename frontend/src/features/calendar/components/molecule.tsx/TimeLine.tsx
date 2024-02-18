import { Tasks } from '../atoms/Tasks';

// 時間軸のリストを作成する関数
function createTimesList() {
  const times = [];
  for (let hour = 0; hour <= 24; hour++) {
    times.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return times;
}

const times = createTimesList();

export const TimeLine = () => {
  return (
    <div className='w-full min-w-[26rem] max-w-[28rem] bg-white h-full flex flex-col relative ml-16'>
      {times.map((time, i) => (
        <div key={i} className='flex w-full'>
          <div className='flex text-custom-black text-[1rem] items-center justify-center'>
            <div
              className='flex absolute left-0 w-[3rem] pr-4 justify-center items-start h-[4rem]'
              style={{ transform: 'translate(-100%, -4.5px)' }}
            >
              {time}
            </div>
          </div>
          <div className='w-full flex items-center justify-center mb-[3.9rem] bg-border-gray-light h-[0.1rem]'></div>
        </div>
      ))}
      <div className='absolute left-[1rem]'>
        <Tasks taskTitle={'React学習'} />
      </div>
      <div className='absolute right-[1rem]'>
        <Tasks taskTitle='Nestの学習' />
      </div>
    </div>
  );
};
