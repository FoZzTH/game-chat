import { MouseEvent } from 'react';

import { chatSize } from '@/constants';
import { setSizeEvent } from '@/events';

type MousePosition = {
  x: number;
  y: number;
};

export function useResize() {
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

  return {
    onMouseDown,
  };
}
