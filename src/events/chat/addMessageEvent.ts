import { createEvent } from 'effector';
import { IChatMessage } from '@/interfaces';

export const addMessageEvent = createEvent<IChatMessage>();
