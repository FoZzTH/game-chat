import { IChatMessage } from '@/interfaces';
import { formatDate } from '../utils/formatDate';

type Props = {
  message: IChatMessage;
};

export const SentMessage = ({ message }: Props) => {
  return (
    <div className='flex items-center flex-row-reverse'>
      <div className='mr-2.5 my-1 py-2.5 max-w-[66%] bg-[#212121] text-white rounded-[1.25rem] rounded-br-none whitespace-normal'>
        <div className='mx-3 break-words'>{message.text}</div>
      </div>
      <div className='mr-2 opacity-40 text-white'>
        {formatDate(message.date)}
      </div>
    </div>
  );
};
