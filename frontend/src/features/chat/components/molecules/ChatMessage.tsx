import { ChatMessageProps, UserType } from '../../chat.types';
import { ChatUserHead } from './ChatUserHead';
import { Fragment } from 'react';

export const ChatMessage = ({ mockData }: { mockData: ChatMessageProps[] }) => {
  // スタイルの動的切り替え
  return (
    <>
      {mockData.map((data, i) => {
        const messageBoxClass =
          data.userType === UserType.Self ? 'bg-white' : 'bg-light-gray';
        const containerClass =
          data.userType === UserType.Self ? 'flex-row-reverse' : 'flex-row';
        const textColor =
          data.userType === UserType.Self ? 'text-custom-black' : 'text-white';
        const formattedTime = data.specificDateTime.format('HH:mm');

        return (
          <Fragment key={i}>
            {data.userType === UserType.Other && (
              <ChatUserHead chatUserName={data.userName} />
            )}
            <div
              className={`flex items-end mb-[0.8rem] ${containerClass}`}
            >
              <div
                className={`${messageBoxClass} rounded-[18px] py-[6px] px-4`}
              >
                <p className={`font-normal ${textColor} break-words`}>
                  {data.message}
                </p>
              </div>
              <p className='text-[10px] text-light-gray mx-4'>{formattedTime}</p>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
