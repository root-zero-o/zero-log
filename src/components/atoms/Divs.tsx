import { ReactNode } from "react";

interface DivsProps {
  children: ReactNode;
  className?: string;
}

export const Row = ({ children, className }: DivsProps) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};
