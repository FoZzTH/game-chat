import { useStore } from 'effector-react';

import { $globalStore } from '@/stores';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MessagesWrapper = ({ children }: Props) => {
  const $store = useStore($globalStore);

  return (
    <div
      style={{
        width: `${$store.settings.size.width}rem`,
        height: `${$store.settings.size.height}rem`,
      }}
      className='h-[calc(100%-5rem)]'
    >
      {children}
    </div>
  );
};
