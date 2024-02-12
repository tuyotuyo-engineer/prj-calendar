import { UserHead } from "@/components/molecules/UserHead";
import { TimeLine } from "./TimeLine";

export const UserSchedule = () => {
  return (
    <div className="flex flex-col w-[30rem]">
      <div className='flex justify-center mb-[1rem]'>
        <UserHead userName={'Tarou Yamada'} />
      </div>
      <TimeLine />
    </div>
  );
};
