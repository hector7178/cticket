import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const PanelAuth: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>PanelAuth</div>;
};

export default PanelAuth;