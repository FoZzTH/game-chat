import { combine } from 'effector';

import { chat } from './chat';
import { settings } from './settings';

export const $globalStore = combine({
  chat,
  settings,
});
