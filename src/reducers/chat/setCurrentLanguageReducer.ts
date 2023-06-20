import { IChat } from '@/interfaces';

export const setCurrentLanguageReducer = (
  store: IChat,
  currentLanguage: string
): IChat => {
  return {
    ...store,
    currentLanguage,
  };
};
