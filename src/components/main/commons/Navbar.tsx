import React from "react";
import { classNames } from "@/helpers";
import PanelAuth from "@/components/main/commons/PanelAuth";

export type props = {
  className?: string;
};

const Navbar: React.FC<props> = ({ className }) => {
  return (
    <div className={classNames("", className)}>
      <PanelAuth />
    </div>
  );
};

export default Navbar;
