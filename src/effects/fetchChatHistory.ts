import { createEffect } from 'effector';

import { env } from '@/env';
import { chatCfg } from '@/config';

export const fetchChatHistoryEffect = createEffect(async (page: number) => {
  const req = await fetch(
    `${env.api.https}?skip=${page * chatCfg.messages.load}&limit=${
      chatCfg.messages.load
    }`
  );

  return req.json();
});
