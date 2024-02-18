import { TasksProps } from '../../types';

export const Tasks = ({ taskTitle }: TasksProps) => {
  return (
    <div className='min-w-[12rem] h-[10rem] bg-orange-400/75 rounded-3xl'>
      <p className='p-4'>{taskTitle}</p>
    </div>
  );
};
