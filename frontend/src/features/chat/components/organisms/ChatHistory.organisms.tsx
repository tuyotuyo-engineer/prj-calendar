import { ChatMessageType, UserType } from '../../chat.types';
import { ChatMessage } from '../molecules/ChatMessage.molecules';

export const ChatHistory = ({ mockData }: { mockData: ChatMessageType[] }) => {
  return (
    <>
      {mockData.map((data, i) => {
        const formattedTime = data.specificDateTime.format('HH:mm');

        return (
          <div key={i} className='px-2'>
            <ChatMessage
              userType={data.userType}
              userName={data.userName}
              message={data.message}
              chatTime={formattedTime}
            />
          </div>
        );
      })}
    </>
  );
};
