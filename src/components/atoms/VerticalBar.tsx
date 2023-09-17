"use client";

import { ReactNode, useEffect } from "react";
import { Row } from "./Divs";
import Button from "./Button/Button";
import MoonIcon from "../../../public/icon/moon.svg";
import { initDarkMode, switchDarkMode } from "@/utils/darkmode";

interface VerticalBarProps {
  children: ReactNode;
}

const VerticalBar = ({ children }: VerticalBarProps) => {
  useEffect(() => {
    initDarkMode();
  }, []);

  return (
    <Row className="w-64 h-screen border-r-[1px] border-neutral-100 bg-neutral-50 p-4 dark:bg-slate-700 dark:border-r-0">
      {children}
      <Button variant="ghost" onClick={() => switchDarkMode()}>
        <MoonIcon width={20} height={20} color="#525252" />
      </Button>
    </Row>
  );
};

export default VerticalBar;
