import clsx from 'clsx';
import { UserType } from '../../chat.types';
import { ChatUserHead } from './ChatUserHead.molecules';
import styles from './ChatMessage.module.scss';

type ChatMassageProps = {
  userType: UserType;
  userName: string;
  message: string;
  chatTime: string;
};

export const ChatMessage = ({
  userType,
  userName,
  message,
  chatTime,
}: ChatMassageProps) => {
  const messageBoxClass =
    userType === UserType.Self ? 'bg-white' : 'bg-light-gray';
  const containerClass =
    userType === UserType.Self ? 'flex-row-reverse' : 'flex-row';
  const textColor =
    userType === UserType.Self ? 'text-custom-black' : 'text-white';

  return (
    <div>
      {userType === UserType.Other && <ChatUserHead chatUserName={userName} />}
      <div className={clsx([styles.wrapper, styles[userType]])}>
        <div className={`${messageBoxClass} rounded-[1.8rem] py-[0.6rem] px-4`}>
          <p className={`font-normal ${textColor} break-words`}>{message}</p>
        </div>
        <p className='text-[1rem] text-light-gray mx-4 mb-[0.2rem]'>
          {chatTime}
        </p>
      </div>
    </div>
  );
};
