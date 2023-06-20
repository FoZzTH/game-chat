import { useEffect, useRef, useState } from 'react';

import { Borders } from '../enums/borders';

export function useScroll() {
  const [activeBorder, setActiveBorder] = useState<Borders>(Borders.RIGHT);
  const listWrapperRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listWrapperRef.current || !listRef.current) {
      return;
    }

    const wrapper = listWrapperRef.current as HTMLDivElement;
    const list = listRef.current as HTMLDivElement;

    const observer = new ResizeObserver(() => {
      if (wrapper.clientWidth > list.clientWidth) {
        setActiveBorder(Borders.NONE);
      } else {
        onScroll();
      }
    });

    observer.observe(wrapper);

    return () => {
      observer.disconnect();
    };
  }, []);

  const onScroll = () => {
    if (!listRef.current) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = listRef.current;

    switch (scrollLeft + clientWidth) {
      case clientWidth:
        setActiveBorder(Borders.RIGHT);
        break;
      case scrollWidth:
        setActiveBorder(Borders.LEFT);
        break;
      default:
        setActiveBorder(Borders.NONE);
    }
  };

  const scrollList = (distance: number) => {
    if (!listRef.current) {
      return;
    }

    (listRef.current as HTMLDivElement).scrollTo({
      left: distance,
      behavior: 'smooth',
    });
  };

  return {
    activeBorder,
    listWrapperRef,
    listRef,
    onScroll,
    scrollList,
  };
}
