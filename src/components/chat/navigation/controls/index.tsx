import { BiExpandAlt } from 'react-icons/bi';
import { HiMinusSm } from 'react-icons/hi';
import { useStore } from 'effector-react';

import { setIsMaximizedEvent } from '@/events';
import { $globalStore } from '@/stores';
import { useResize } from './hooks/useResize';

export const Controls = () => {
  const $store = useStore($globalStore);

  const { onMouseDown } = useResize();

  return (
    <div className='flex items-center ml-auto p-2 select-none'>
      <div
        onMouseDown={onMouseDown}
        className='relative ml-1 w-[1.125rem] h-[1.125rem] bg-white/[.2] rounded-full cursor-ne-resize'
      >
        <BiExpandAlt
          color='white'
          className='h-[50%] w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div
        onClick={() => setIsMaximizedEvent(!$store.settings.isMaximized)}
        className='ml-1 w-[1.125rem] h-[1.125rem] bg-white/[.2] rounded-full text-[#ACACAC] cursor-pointer'
      >
        <HiMinusSm className='w-full h-full' />
      </div>
    </div>
  );
};
