import { ReactNode } from "react";

import style from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: IButtonProps) => {
  return <button className={style.btn}>{children}</button>;
};
