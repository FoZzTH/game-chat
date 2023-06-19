import { ISettings } from '@/interfaces';
import { chatSize } from '@/constants';

export const initSettings = (): ISettings => {
  return {
    size: {
      height: chatSize.MIN_HEIGHT,
      width: chatSize.MIN_WIDTH,
    },
    isMaximized: true,
  };
};
