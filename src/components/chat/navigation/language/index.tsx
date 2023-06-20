import { useStore } from 'effector-react';
import { BaseSyntheticEvent } from 'react';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { $globalStore } from '@/stores';
import { setCurrentLanguageEvent } from '@/events';

export const Language = () => {
  const $store = useStore($globalStore);

  const [isOpened, setOpened] = useState(false);

  const onButtonClick = () => {
    setOpened(!isOpened);
  };

  const onDropDawnClick = (e: BaseSyntheticEvent) => {
    setCurrentLanguageEvent(e.target.value);
    setOpened(false);
  };

  return (
    <div className='text-white z-10 ml-2'>
      <button onClick={onButtonClick} className='w-10 h-full flex items-center'>
        {$store.chat.currentLanguage}
        <div className='text-[#ACACAC]'>
          {isOpened ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>
      {isOpened && (
        <ul>
          {$store.chat.languages
            .filter((language) => language !== $store.chat.currentLanguage)
            .map((language, i) => {
              return (
                <li key={i}>
                  <button
                    className='w-full h-full bg-black/[.33] hover:bg-black/[.66]'
                    onClick={onDropDawnClick}
                    value={language}
                  >
                    {language}
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
