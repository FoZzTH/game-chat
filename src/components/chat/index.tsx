import { useStore } from 'effector-react';

import { Input } from './input';
import { Messages } from './messages';
import { Navigation } from './navigation';

import { $globalStore } from '@/stores';

export const Chat = () => {
  const $store = useStore($globalStore);

  const chatRounded = $store.settings.isMaximized
    ? 'rounded-2xl'
    : 'rounded-t-2xl';

  return (
    <div className={`bg-black/50 ${chatRounded} text-xs font-rubik`}>
      <Navigation />
      {$store.settings.isMaximized && (
        <>
          <Messages />
          <Input />
        </>
      )}
    </div>
  );
};
