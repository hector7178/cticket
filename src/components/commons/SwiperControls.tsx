import React, { useCallback } from 'react';
import { classNames } from '@/helpers';
import { Icon } from '@/components/commons';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import {CurrentColor} from '@/helpers'
export type props = {
  className?: string;
  swiperRef: React.MutableRefObject<any>;
};

const SwiperControls: React.FC<props> = ({ className, swiperRef }) => {
  const currentColor = CurrentColor()
  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);
  return (
    <div className={classNames('', className)}>
      <div
        className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 -left-12"
        onClick={handlePrev}
      >
        <ChevronLeftIcon className={`w-10 h-10 text-${currentColor}`} />
      </div>
      <div
        className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 -right-12"
        onClick={handleNext}
      >
        <ChevronRightIcon className={`w-10 h-10 text-${currentColor}`} />
      </div>
    </div>
  );
};

export default SwiperControls;
