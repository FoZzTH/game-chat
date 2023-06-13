import Image from 'next/image';
import { BsEmojiSmile } from 'react-icons/bs';

const PLACEHOLDER = 'Напишите сообщение...';

export const Input = () => {
  return (
    <div className='flex h-[10%] bg-black/[.33] rounded-bl-2xl rounded-br-2xl item-centered'>
      <input
        className='w-[95%] mx-4 bg-transparent text-white focus:outline-0'
        placeholder={PLACEHOLDER}
      />
      <button className='mr-4'>
        <BsEmojiSmile className='w-5 h-5 text-white opacity-50' />
      </button>
    </div>
  );
};
