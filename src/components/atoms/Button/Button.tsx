import { ReactNode, useMemo } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: string;
  onClick: () => void;
}

const Button = ({ children, variant = "contained", onClick }: ButtonProps) => {
  const variantStyle: { [key: string]: string } = {
    ghost: "border-none bg-transparent",
    contained: "",
  };

  return (
    <button
      className={`flex flex-row px-3 py-1 h-fit border-2 rounded-md hover:opacity-80 transition-all ${variantStyle[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
