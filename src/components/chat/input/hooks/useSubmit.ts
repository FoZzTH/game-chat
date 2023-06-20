import { BaseSyntheticEvent, useRef } from 'react';
import { isMessageValid } from '../utils';
import { sendMessage } from '@/socket';
import { addMessageEvent } from '@/events';
import { chatCfg } from '@/config';

export function useSubmit() {
  const inputRef = useRef(null);

  const onSubmit = (e: BaseSyntheticEvent) => {
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

  return { inputRef, onSubmit };
}
