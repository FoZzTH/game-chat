import { chatNavigation } from '@/constants';
import { IChat, IChatMessage } from '@/interfaces';

const DEFAULT_LANGUAGE = chatNavigation.languages[0];
const DEFAULT_CHANNEL = chatNavigation.channels[0];

export const addMessageReducer = (
  store: IChat,
  message: IChatMessage
): IChat => {
  const channel = store.channels.find(
    (channel) =>
      channel.language === DEFAULT_LANGUAGE && channel.name === DEFAULT_CHANNEL
  );

  channel?.messages.push(message);

  return {
    ...store,
  };
};
