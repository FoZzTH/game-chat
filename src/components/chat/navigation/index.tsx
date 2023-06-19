import { useStore } from 'effector-react';

import { $globalStore } from '@/stores';

import { Channels } from './channels';
import { Controls } from './controls';
import { Language } from './language';

export const Navigation = () => {
  const $store = useStore($globalStore);

  return (
    <nav
      style={{ width: `${$store.settings.size.width}rem` }}
      className='h-10 bg-black/[.33] rounded-tl-2xl rounded-tr-2xl flex flex-row text-sm'
    >
      {$store.settings.isMaximized && (
        <>
          <Channels />
          <Language />
        </>
      )}
      <Controls />
    </nav>
  );
};
