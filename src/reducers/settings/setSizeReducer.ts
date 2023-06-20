import { chatSize } from '@/constants';
import { ISettings, ISize } from '@/interfaces';
import { clamp } from '@/utils';

export const setSizeReducer = (
  store: ISettings,
  toChange: ISize
): ISettings => {
  return {
    ...store,
    size: {
      width: clamp(
        store.size.width + toChange.width,
        chatSize.MIN_WIDTH,
        chatSize.MAX_WIDTH
      ),
      height: clamp(
        store.size.height + toChange.height,
        chatSize.MIN_HEIGHT,
        chatSize.MAX_HEIGHT
      ),
    },
  };
};
