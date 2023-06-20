import { setCurrentChannelEvent } from '@/events';
import { $globalStore } from '@/stores';
import { useStore } from 'effector-react';
import { BaseSyntheticEvent, MutableRefObject, UIEventHandler } from 'react';

type Props = {
  listRef: MutableRefObject<null>;
  onScroll: (e: BaseSyntheticEvent) => void;
};

const ACTIVE_CHANNEL_STYLE =
  'text-white after:absolute after:w-full after:bottom-0 after:left-0 after:border-b-2 after:border-[#23B838] after:cursor-auto';

const onChannelChange = (e: BaseSyntheticEvent) => {
  const target = e.target.innerHTML;
  e.target.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
  });

  setCurrentChannelEvent(target);
};

export const ChannelList = ({ listRef, onScroll }: Props) => {
  const $store = useStore($globalStore);

  return (
    <ul
      ref={listRef}
      onScroll={onScroll}
      className='h-full uppercase flex overflow-hidden scroll-hidden'
    >
      {$store.chat.channels
        .filter((channel) => channel.language === $store.chat.currentLanguage)
        .map((channel, i) => (
          <li
            key={i}
            className={'relative h-full mx-2 flex items-center text-[#23B838]'}
          >
            <div
              onClick={onChannelChange}
              className={`${
                $store.chat.currentChannel === channel.name
                  ? ACTIVE_CHANNEL_STYLE
                  : null
              } cursor-pointer`}
            >
              {channel.name}
            </div>
          </li>
        ))}
    </ul>
  );
};
