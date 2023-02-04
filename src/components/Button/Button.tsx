import { ReactNode } from "react";

import style from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: IButtonProps) => {
  return <button className={style.btn}>{children}</button>;
};
