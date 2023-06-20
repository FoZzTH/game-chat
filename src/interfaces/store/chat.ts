import { IChatChannel } from './chatChannel';

export interface IChat {
  currentLanguage: string;
  currentChannel: string;

  languages: string[];
  channels: IChatChannel[];
}
