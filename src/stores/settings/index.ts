import { createStore } from 'effector';

import { ISettings } from '@/interfaces';
import { setIsMaximizedEvent, setSizeEvent } from '@/events';
import { initSettings } from './initSettings';
import { setIsMaximizedReducer, setSizeReducer } from '@/reducers';

export const settings = createStore<ISettings>(initSettings());

settings.on(setIsMaximizedEvent, setIsMaximizedReducer);
settings.on(setSizeEvent, setSizeReducer);
