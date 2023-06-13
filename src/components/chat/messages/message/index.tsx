import { MessageText } from './messageText';
import { UserInfo } from './userInfo';

type Props = {
  message: {
    id: string;
    userName: string;
    text: string;
    date: string;
  };
};

export const Message = ({ message }: Props) => {
  const getTime = () => {
    const date = new Date(message.date);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  return (
    <div className='flex items-center'>
      <div className='ml-2.5 my-1 max-w-[66%] bg-white rounded-[1.25rem] rounded-bl-none flex-none whitespace-normal'>
        <UserInfo userName={message.userName} />
        <MessageText text={message.text} />
      </div>
      <div className='ml-2 opacity-40 text-white'>{getTime()}</div>
    </div>
  );
};
