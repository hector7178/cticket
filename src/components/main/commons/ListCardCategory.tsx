import 'swiper/css';
import 'swiper/css/navigation';
import React, { useRef } from 'react';
import { classNames } from '@/helpers';
import CardCategory, {
  props as CardCategoryProps,
} from '@/components/main/commons/CardCategory';
import { props as PaginationProps } from '@/components/commons/Pagination';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Button, Icon, SwiperControls } from '@/components/commons';

export type props = {
  className?: string;
  layout: 'grid' | 'swiper';
  size: 'small' | 'large';
  items: Omit<CardCategoryProps, 'size'>[];
  totalDocs: number;
} & PaginationProps;

const ListCardCategory: React.FC<props> = ({
  className,
  items,
  layout = 'grid',
  setCurrentPage,
  setPageSize,
  size = 'large',
  totalDocs,
}) => {
  const swiperRef = useRef(null);
  const t = useTranslations('List_Card_Category');
  return (
    <div className={classNames('flex flex-col ', className)}>
      <span className="inline-block font-bold mx-auto text-2xl">
        {t('title')}
      </span>
      <div className="mt-7 px-5 sm:px-16 relative">
        {layout == 'swiper' && <SwiperControls swiperRef={swiperRef} />}
        {layout == 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {items?.map((item, idx) => (
              <CardCategory key={idx} size={size} {...item} />
            ))}
          </div>
        ) : (
          <Swiper
            ref={swiperRef}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
          >
            {items?.map((item, idx) => (
              <SwiperSlide className="py-8 pr-5" key={idx}>
                <CardCategory size={size} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ListCardCategory;
