import { BsEmojiSmile } from 'react-icons/bs';

import { chatInput } from '@/constants';
import { useSubmit } from './hooks/useSubmit';

export const Input = () => {
  const { inputRef, onSubmit } = useSubmit();

  return (
    <form
      onSubmit={onSubmit}
      className='flex mt-auto h-10 bg-black/[.33] rounded-bl-2xl rounded-br-2xl item-centered'
    >
      <input
        name='message'
        ref={inputRef}
        className='w-[95%] mx-4 bg-transparent text-white focus:outline-none'
        placeholder={chatInput.PLACEHOLDER}
        maxLength={200}
      />
      <button className='mr-4'>
        <BsEmojiSmile className='w-5 h-5 text-white opacity-50' />
      </button>
    </form>
  );
};
