import { ReactNode } from "react";

import cn from "classnames";
import style from "./Modal.module.scss";

interface IModalProps {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  children: ReactNode;
}

export const Modal = ({ isEdit, children }: IModalProps) => {
  return (
    <div
      className={cn(style.overlay, style.animated, {
        [style.show]: isEdit,
      })}
    >
      <div className={style.modal}>{children}</div>
    </div>
  );
};
