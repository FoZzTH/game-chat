import { useEvent, useStore } from 'effector-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { ReceivedMessage, SentMessage } from './message';
import { $globalStore } from '@/stores';
import { fetchChatHistoryEffect } from '@/effects';
import { chatCfg } from '@/config';
import { subscribeForNewMessages } from '@/socket';
import { IApiMessage } from '@/interfaces';
import { addMessageEvent } from '@/events';
import { hydrateMessage } from '@/utils/api';

export const Messages = () => {
  const [firstItemIndex, setFirstItemIndex] = useState(chatCfg.messages.limit);
  const [page, setPage] = useState(1);

  const $store = useStore($globalStore);

  const fetchChatHistoryEvent = useEvent(fetchChatHistoryEffect);

  const outerRef = useRef(null);

  useEffect(() => {
    subscribeForNewMessages(onNewMessage);
    fetchChatHistoryEvent(0);
  }, []);

  const onNewMessage = (message: IApiMessage) => {
    addMessageEvent(hydrateMessage(message));
  };

  const prependMessages = useCallback(() => {
    const nextFirstItemIndex = firstItemIndex - chatCfg.messages.load;

    setFirstItemIndex(() => nextFirstItemIndex);

    fetchChatHistoryEvent(page);

    setPage((prevPage) => prevPage + 1);

    return false;
  }, [firstItemIndex, page, fetchChatHistoryEvent]);

  return (
    <div
      ref={outerRef}
      style={{
        width: `${$store.settings.size.width}rem`,
        height: `${$store.settings.size.height}rem`,
      }}
      className='h-[calc(100%-5rem)]'
    >
      <Virtuoso
        className='scroll-hidden'
        data={
          $store.chat.channels.find(
            (channel) =>
              channel.language === $store.chat.currentLanguage &&
              channel.name === $store.chat.currentChannel
          )?.messages
        }
        firstItemIndex={firstItemIndex}
        initialTopMostItemIndex={chatCfg.messages.load - 1}
        startReached={prependMessages}
        followOutput={'auto'}
        itemContent={(index, message) => {
          return message.userName === chatCfg.user.name ? (
            <SentMessage key={index} message={message} />
          ) : (
            <ReceivedMessage key={index} message={message} />
          );
        }}
      />
    </div>
  );
};
