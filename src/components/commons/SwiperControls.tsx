import React, { useCallback } from 'react';
import { classNames } from '@/helpers';
import { Icon } from '@/components/commons';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
export type props = {
  className?: string;
  swiperRef: React.MutableRefObject<any>;
};

const SwiperControls: React.FC<props> = ({ className, swiperRef }) => {
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
        className=" absolute top-1/2 transform -translate-y-1/2 -left-10  cursor-pointer"
        onClick={handlePrev}
      >
        <ChevronLeftIcon className="w-5 h-5 text-primary-500" />
      </div>
      <div
        className=" absolute top-1/2 transform -translate-y-1/2 -right-10 cursor-pointer"
        onClick={handleNext}
      >
        <ChevronRightIcon className="w-5 h-5 text-primary-500" />
      </div>
    </div>
  );
};

export default SwiperControls;
