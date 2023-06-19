import { ISettings } from '@/interfaces';

export const setIsMaximizedReducer = (
  store: ISettings,
  value: boolean
): ISettings => {
  return {
    ...store,
    isMaximized: value,
  };
};
