import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { ChannelList } from './channelList';

const SCROLL_SPEED = 75;

const NONE = 'none';
const LEFT_BUTTON = 'left';
const RIGHT_BUTTON = 'right';

const scrollList = (listRef: MutableRefObject<null>, distance: number) => {
  if (!listRef.current) {
    return;
  }

  (listRef.current as HTMLDivElement).scrollTo({
    left: distance,
    behavior: 'smooth',
  });
};

export const Channels = () => {
  const [activeButton, setActiveButton] = useState(RIGHT_BUTTON);

  const channelsWrapperRef = useRef(null);
  const channelsRef = useRef(null);

  useEffect(() => {
    if (!channelsWrapperRef.current || !channelsRef.current) {
      return;
    }

    const wrapper = channelsWrapperRef.current as HTMLDivElement;
    const channels = channelsRef.current as HTMLDivElement;

    const observer = new ResizeObserver(() => {
      if (wrapper.clientWidth > channels.clientWidth) {
        setActiveButton(NONE);
      } else {
        handleScroll();
      }
    });

    observer.observe(wrapper);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = () => {
    if (!channelsRef.current) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = channelsRef.current;

    switch (scrollLeft + clientWidth) {
      case clientWidth:
        setActiveButton(RIGHT_BUTTON);
        break;
      case scrollWidth:
        setActiveButton(LEFT_BUTTON);
        break;
      default:
        setActiveButton(NONE);
    }
  };

  return (
    <div
      ref={channelsWrapperRef}
      className='h-full m-0 w-[70%] relative flex items-center'
    >
      {activeButton === LEFT_BUTTON && (
        <div className='z-10 rounded-tl-2xl left-0 flex items-center absolute h-full'>
          <div
            onClick={() => scrollList(channelsRef, -SCROLL_SPEED)}
            className='w-2 text-[#ACACAC] cursor-pointer'
          >
            <FaChevronLeft />
          </div>
        </div>
      )}

      <ChannelList listRef={channelsRef} onScroll={handleScroll} />

      {activeButton === RIGHT_BUTTON && (
        <div className='z-10 right-0 flex items-center absolute h-full w-[5%]'>
          <div
            onClick={() => scrollList(channelsRef, SCROLL_SPEED)}
            className='text-[#ACACAC] cursor-pointer'
          >
            <FaChevronRight className='float-right' />
          </div>
        </div>
      )}
    </div>
  );
};
