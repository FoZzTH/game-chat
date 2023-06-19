import { MouseEvent } from 'react';
import { BiExpandAlt } from 'react-icons/bi';
import { HiMinusSm } from 'react-icons/hi';
import { useStore } from 'effector-react';

import { setIsMaximizedEvent, setSizeEvent } from '@/events';
import { $globalStore } from '@/stores';
import { chatSize } from '@/constants';

type MousePosition = {
  x: number;
  y: number;
};

const mousePosition: MousePosition = {
  x: 0,
  y: 0,
};

const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
};

const onMouseMove = (e: globalThis.MouseEvent) => {
  const newX = e.clientX - mousePosition.x; // getting a negative value on cursor left side move
  const newY = mousePosition.y - e.clientY; // getting a negative value on cursor downward move

  const width = Math.sign(newX) * chatSize.RESIZE_SPEED;
  const height = Math.sign(newY) * chatSize.RESIZE_SPEED;

  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;

  setSizeEvent({ width, height });
};

const onMouseUp = (e: globalThis.MouseEvent) => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
};

export const Controls = () => {
  const $store = useStore($globalStore);

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
