import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { ChannelList } from './channelList';
import { useScroll } from './hooks/useScroll';
import { Borders } from './enums/borders';

const SCROLL_SPEED = 75;

export const Channels = () => {
  const { activeBorder, onScroll, listRef, listWrapperRef, scrollList } =
    useScroll();

  return (
    <div
      ref={listWrapperRef}
      className='h-full m-0 w-[70%] relative flex items-center'
    >
      {activeBorder === Borders.LEFT && (
        <div className='z-10 rounded-tl-2xl left-0 flex items-center absolute h-full'>
          <div
            onClick={() => scrollList(-SCROLL_SPEED)}
            className='w-2 text-[#ACACAC] cursor-pointer'
          >
            <FaChevronLeft />
          </div>
        </div>
      )}

      <ChannelList listRef={listRef} onScroll={onScroll} />

      {activeBorder === Borders.RIGHT && (
        <div className='z-10 right-0 flex items-center absolute h-full w-[5%]'>
          <div
            onClick={() => scrollList(SCROLL_SPEED)}
            className='text-[#ACACAC] cursor-pointer'
          >
            <FaChevronRight className='float-right' />
          </div>
        </div>
      )}
    </div>
  );
};
