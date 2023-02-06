import React from "react";
import style from "./Characters.module.scss";
import cn from "classnames";

interface ICharactersProps {
  name?: string;
  className?: string;
}

export const Characters = ({ name, className }: ICharactersProps) => {
  const characters = name?.replace(/(.).+ (.).+/, "$1$2");

  return <div className={cn(style.avatar, className)}>{characters}</div>;
};
