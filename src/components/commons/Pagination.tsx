import React, { useEffect } from 'react';
import '@etchteam/next-pagination/dist/index.css';
import NextPaginate from '@etchteam/next-pagination';
import { useRouter } from 'next/router';
import { classNames } from '@/helpers';

export type props = {
  className?: string;
  totalDocs: number;
  setCurrentPage: any;
  setPageSize: any;
};

const Pagination: React.FC<props> = ({
  className,
  totalDocs,
  setCurrentPage,
  setPageSize,
}) => {
  const router = useRouter();
  const { page, size } = router.query;

  useEffect(() => {
    if (size) setPageSize(parseInt(size as string));
    if (page) setCurrentPage(parseInt(page as string) - 1);
  }, [page, size]);
  return (
    <div className={classNames(className, 'text-black')}>
      <NextPaginate total={totalDocs} sizes={[10, 20, 40, 50, 80, 100]} />
    </div>
  );
};

export default Pagination;
