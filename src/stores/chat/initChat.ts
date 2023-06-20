import { chatNavigation } from '@/constants';
import { IChat, IChatChannel } from '@/interfaces';

export const initChat = (): IChat => {
  const languages: string[] = [...chatNavigation.languages];
  const channels: IChatChannel[] = [];

  languages.forEach((language) => {
    chatNavigation.channels.forEach((channel) => {
      channels.push({
        language,
        name: channel,
        messages: [],
      });
    });
  });

  return {
    currentLanguage: languages[0],
    currentChannel: channels[0].name,

    languages,
    channels,
  };
};
