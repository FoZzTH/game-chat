import { chatNavigation } from '@/constants';
import { IApiMessage, IChat } from '@/interfaces';
import { hydrateMessage } from '@/utils/api';

const DEFAULT_LANGUAGE = chatNavigation.languages[0];
const DEFAULT_CHANNEL = chatNavigation.channels[0];

export const fetchChatHistoryReducer = (
  store: IChat,
  apiMessages: IApiMessage[]
) => {
  const channel = store.channels.find(
    (channel) =>
      channel.language === DEFAULT_LANGUAGE && channel.name === DEFAULT_CHANNEL
  );

  if (!channel) {
    return {
      ...store,
    };
  }

  apiMessages.forEach((apiMessage) => {
    if (channel.messages.find((m) => m.id === apiMessage.id)) {
      return;
    }

    channel.messages.unshift(hydrateMessage(apiMessage));
  });

  return {
    ...store,
  };
};
