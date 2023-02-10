import { MouseEvent } from "react";
import { Button } from "../Button";

import style from "./ButtonWithIcon.module.scss";
import cn from "classnames";

interface IButtonWithIconProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  img: string;
  alt: string;
  className?: string;
  title: string;
}

export const ButtonWithIcon = ({
  onClick,
  img,
  alt,
  className,
  title,
}: IButtonWithIconProps) => {
  return (
    <div className={cn(style.backBlock, className)}>
      <img src={img} alt={alt} className={style.img} />
      <Button className={style.backBtn} onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};
