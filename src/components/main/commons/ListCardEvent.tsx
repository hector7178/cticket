import React, { useEffect, useState, useRef } from 'react';
import { classNames } from '@/helpers';
import { UseFormReturn } from 'react-hook-form';
import { CircularProgress } from '@mui/material';
import {
  WrapperLoader,
  SwiperControls,
  Title,
  Select,
  Button,
} from '@/components/commons';
import CardEvent, {
  props as CardEventProps,
} from '@/components/main/commons/CardEvent';
import Pagination, {
  props as PaginationProps,
} from '@/components/commons/Pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import {
  Squares2X2Icon,
  Bars3Icon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import DrawerSearchFilters from '@/components/main/commons/DrawerSearchFilters';

export type props = {
  className?: string;
  title: string;
  layout?: 'grid' | 'columns' | 'swiper';
  controls?: boolean;
  items?: CardEventProps[];
  loading: boolean;
  totalDocs: number;
} & PaginationProps &
  UseFormReturn<any>;

const ListCardEvent: React.FC<props> = ({
  className,
  title,
  layout = 'grid',
  controls = false,
  items,
  loading,
  totalDocs,
  setPageSize,
  setCurrentPage,
  ...useFormReturn
}) => {
  const swiperRef = useRef(null);
  const [cols, setCols] = useState(4);
  const [currentLayout, setCurrentLayout] = useState(layout);
  const [drawerFilters, setDrawerFilters] = useState(false);
  const t = useTranslations('List_Card_Event');
  const { register } = useFormReturn || {};
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 992) {
        setCols(3);
      } else if (width > 640) {
        setCols(2);
      } else {
        setCols(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={classNames('', className)}>
      <div className="flex flex-col sm:flex-row gap-10 sm:justify-between">
        <Title
          className={classNames(controls && 'truncate w-[40%]')}
          level="h4"
        >
          {title}
        </Title>
        {controls && (
          <div className="flex items-center gap-7 order-first sm:order-none">
            <div className="flex items-center gap-5">
              <p className="font-bold whitespace-nowrap">{t('order_by')}:</p>
              <Select
                className=""
                options={[{ name: t('relevant'), value: 'relevant' }]}
                {...register('sortBy')}
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="font-bold whitespace-nowrap">{t('view')}:</p>
              <div className="flex items-center gap-3">
                <Squares2X2Icon
                  className={classNames(
                    'w-5 h-5 cursor-pointer ',
                    currentLayout == 'grid' ? 'text-black' : 'text-gray-500'
                  )}
                  onClick={() => setCurrentLayout('grid')}
                />
                <Bars3Icon
                  className={classNames(
                    'w-5 h-5 cursor-pointer ',
                    currentLayout == 'columns' ? 'text-black' : 'text-gray-500'
                  )}
                  onClick={() => setCurrentLayout('columns')}
                />
                <Button
                  className="md:hidden"
                  size="small"
                  iconLeft={<AdjustmentsHorizontalIcon className="w-5 h-5" />}
                  color="black"
                  weight="outline"
                  onClick={() => setDrawerFilters(true)}
                >
                  {t('more_filters')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <WrapperLoader className="mt-8" loading={loading} totalDocs={totalDocs}>
        <div>
          {currentLayout == 'swiper' ? (
            <div className="relative">
              <Swiper ref={swiperRef} slidesPerView={cols} spaceBetween={50}>
                {items?.map((item, idx) => (
                  <SwiperSlide className="h-auto" key={idx}>
                    <CardEvent layout="grid" {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <SwiperControls swiperRef={swiperRef} />
            </div>
          ) : currentLayout == 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3">
              {items?.map((item, idx) => (
                <CardEvent key={idx} layout="grid" {...item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items?.map((item, idx) => (
                <CardEvent key={idx} layout="column" {...item} />
              ))}
            </div>
          )}
        </div>
        <div className="aspect-video card p-8 flex items-center justify-center text-primary-500">
          <CircularProgress color="inherit" />
        </div>
        <div className="aspect-video card p-6 flex flex-col items-center justify-center text-2xl">
          <MagnifyingGlassIcon className="w-16 h-16" />
          <p className="font-bold mt-5">{t('not_results')}</p>
        </div>
      </WrapperLoader>
      {layout !== 'swiper' && (
        <Pagination
          className="mt-5"
          totalDocs={totalDocs}
          setPageSize={setPageSize}
          setCurrentPage={setCurrentPage}
        />
      )}
      <DrawerSearchFilters
        isOpen={drawerFilters}
        close={() => setDrawerFilters(false)}
        {...useFormReturn}
      />
    </div>
  );
};

export default ListCardEvent;
