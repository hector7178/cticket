import React from 'react';
import { classNames } from '@/helpers';

export type props = {
  className?: string;
  loading: boolean;
  totalDocs: number;
  children: React.ReactNode;
};

const WrapperLoader: React.FC<props> = ({
  className,
  loading,
  totalDocs,
  children,
}) => {
  const childrens = React.Children.toArray(children);
  return (
    <div className={classNames('', className)}>
      {loading
        ? childrens[1]
        : totalDocs == 0
        ? children[2]
        : loading == false && totalDocs && children[0]}
    </div>
  );
};

export default WrapperLoader;
