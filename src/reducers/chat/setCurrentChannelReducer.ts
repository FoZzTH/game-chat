import { IChat } from '@/interfaces';

export const setCurrentChannelReducer = (
  store: IChat,
  currentChannel: string
): IChat => {
  return {
    ...store,
    currentChannel,
  };
};
