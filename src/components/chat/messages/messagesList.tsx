import { useEvent, useStore } from 'effector-react';
import { useCallback, useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { ReceivedMessage, SentMessage } from './message';
import { $globalStore } from '@/stores';
import { chatCfg } from '@/config';
import { useFetchChatHistory } from './hooks/useFetchChatHistory';

export const MessagesList = () => {
  const $store = useStore($globalStore);

  const [firstItemIndex, setFirstItemIndex] = useState(chatCfg.messages.limit);
  const [page, setPage] = useState(1);
  const { fetchChatHistory } = useFetchChatHistory();

  const prependMessages = useCallback(() => {
    const nextFirstItemIndex = firstItemIndex - chatCfg.messages.load;

    setFirstItemIndex(() => nextFirstItemIndex);

    fetchChatHistory(page);
    setPage((prevPage) => prevPage + 1);

    return false;
  }, [firstItemIndex, page, fetchChatHistory]);

  return (
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
  );
};
