import { useEffect } from 'react';
import { useStore } from 'effector-react';

import { Input } from './input';
import { Messages } from './messages';
import { Navigation } from './navigation';

import { $globalStore } from '@/stores';
import { subscribeForNewMessages } from '@/socket';
import { addMessageEvent } from '@/events';
import { hydrateMessage } from '@/utils/api';
import { IApiMessage } from '@/interfaces';

const socketSubscribe = () => {
  const onNewMessage = (message: IApiMessage) => {
    addMessageEvent(hydrateMessage(message));
  };

  return subscribeForNewMessages(onNewMessage);
};

export const Chat = () => {
  const $store = useStore($globalStore);

  const chatRounded = $store.settings.isMaximized
    ? 'rounded-2xl'
    : 'rounded-t-2xl';

  useEffect(() => {
    const removeSubscription = socketSubscribe();

    return removeSubscription;
  }, []);

  return (
    <div className={`bg-black/50 ${chatRounded} text-xs font-rubik`}>
      <Navigation />
      {$store.settings.isMaximized && (
        <>
          <Messages />
          <Input />
        </>
      )}
    </div>
  );
};
