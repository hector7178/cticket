import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const Base: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>Base</div>;
};

export default Base;