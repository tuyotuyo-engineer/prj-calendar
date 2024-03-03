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
  return (
    <div>
      {userType === UserType.Other && <ChatUserHead chatUserName={userName} />}
      <div className={clsx([styles.wrapper, styles[userType]])}>
        <div className={clsx([styles.box, styles[userType]])}>
          <p className={clsx([styles.text, styles[userType]])}>{message}</p>
        </div>
        <p className='text-[1rem] text-light-gray mx-4 mb-[0.2rem]'>
          {chatTime}
        </p>
      </div>
    </div>
  );
};
