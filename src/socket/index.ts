import { chatCfg } from '@/config';
import { env } from '@/env';
import { IApiMessage } from '@/interfaces';
import { io } from 'socket.io-client';

const socket = io(env.api.socket, {
  transports: ['websocket'],
  upgrade: false,
});

export const sendMessage = (message: string) => {
  socket.emit(
    'message',
    {
      from: chatCfg.user.name,
      text: message,
    },
    (err: any) => {
      if (!err) {
        return;
      }
      console.log(err);
    }
  );
};

export const subscribeForNewMessages = (
  handler: (message: IApiMessage) => void
) => {
  socket.on('message', handler);
};
