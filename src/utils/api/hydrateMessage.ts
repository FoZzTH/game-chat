import { IApiMessage, IChatMessage } from '@/interfaces';

export const hydrateMessage = (message: IApiMessage): IChatMessage => {
  return {
    id: message.id,
    userName: message.from,
    text: message.text,
    date: message.createdAt,
  };
};
