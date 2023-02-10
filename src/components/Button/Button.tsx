import { MouseEvent, ReactNode } from "react";

import style from "./Button.module.scss";
import cn from "classnames";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  type,
  children,
  className,
  disabled,
  onClick,
}: IButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(style.btn, className, {
        [style.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
