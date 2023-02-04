import { ReactNode } from "react";

import style from "./Button.module.scss";
import cn from "classnames";

interface IButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ children, className, disabled }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(style.btn, className, {
        [style.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};
