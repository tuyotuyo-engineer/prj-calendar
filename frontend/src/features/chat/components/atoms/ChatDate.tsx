import { ChatDateProps } from "../../chat.types";

export const ChatDate = ({dateTime}: ChatDateProps) => {
  return (
    <div className='flex justify-center items-center w-full h-[1rem] py-[1rem]'>
      <p className='font-normal text-[10px] text-light-gray'>{dateTime}</p>
    </div>
  );
};
