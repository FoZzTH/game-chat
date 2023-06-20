import { IChatMessage } from './chatMessage';

export interface IChatChannel {
  language: string;
  name: string;
  messages: IChatMessage[];
}
