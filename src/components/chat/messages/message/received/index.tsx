import { IChatMessage } from '@/interfaces';
import { UserInfo } from '../userInfo';
import { formatDate } from '../utils/formatDate';

type Props = {
  message: IChatMessage;
};

export const ReceivedMessage = ({ message }: Props) => {
  return (
    <div className='flex items-center'>
      <div className='ml-2.5 my-1 py-2.5 max-w-[66%] bg-white rounded-[1.25rem] rounded-bl-none flex-none whitespace-normal'>
        <UserInfo userName={message.userName} />
        <div className='mx-3 break-words'>{message.text}</div>
      </div>
      <div className='ml-2 opacity-40 text-white'>
        {formatDate(message.date)}
      </div>
    </div>
  );
};
