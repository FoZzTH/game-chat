import { BaseSyntheticEvent, MutableRefObject, useRef } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

import { chatInput } from '@/constants';
import { sendMessage } from '@/socket';
import { isMessageValid } from './utils';
import { addMessageEvent } from '@/events';
import { chatCfg } from '@/config';

const onSubmit = (e: BaseSyntheticEvent, inputRef: MutableRefObject<null>) => {
  e.preventDefault();

  if (!inputRef.current) {
    return;
  }

  const input = inputRef.current as HTMLInputElement;

  if (!isMessageValid(input.value)) {
    return;
  }

  sendMessage(input.value);
  addMessageEvent({
    id: '',
    date: new Date().toISOString(),
    text: input.value,
    userName: chatCfg.user.name,
  });

  input.value = '';
};

export const Input = () => {
  const inputRef = useRef(null);

  return (
    <form
      onSubmit={(e) => onSubmit(e, inputRef)}
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
