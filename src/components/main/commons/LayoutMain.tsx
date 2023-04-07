import React from 'react';
import { classNames } from '@/helpers';
import Footer from '@/components/main/commons/Footer';
import { Header as Navbar } from '@/components/layout/content/header';
export type props = {
  className?: string;
  children: React.ReactNode;
};

const LayoutMain: React.FC<props> = ({ className, children }) => {
  return (
    <div className={classNames('', className)}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
