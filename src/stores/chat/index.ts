import { createStore } from 'effector';

import {
  addMessageEvent,
  setCurrentChannelEvent,
  setCurrentLanguageEvent,
} from '@/events';
import { fetchChatHistoryEffect } from '@/effects';
import { IChat } from '@/interfaces';
import { initChat } from './initChat';
import {
  fetchChatHistoryReducer,
  setCurrentChannelReducer,
  setCurrentLanguageReducer,
  addMessageReducer,
} from '@/reducers';

export const chat = createStore<IChat>(initChat());

chat.on(setCurrentLanguageEvent, setCurrentLanguageReducer);
chat.on(setCurrentChannelEvent, setCurrentChannelReducer);

chat.on(fetchChatHistoryEffect.doneData, fetchChatHistoryReducer);

chat.on(addMessageEvent, addMessageReducer);
