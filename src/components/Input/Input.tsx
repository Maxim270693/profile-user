import { ChangeEvent, useState } from "react";

import EyeIcon from "../../image/eye.svg";
import EyeCloseIcon from "../../image/eye-close.svg";

import style from "./Input.module.scss";

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  image: string;
  eyeIcon?: boolean;
  eyeCloseIcon?: boolean;
}

export const Input = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  image,
  eyeIcon,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(true);

  const renderEyeIcon = (
    <img
      src={isShowPassword ? EyeIcon : EyeCloseIcon}
      alt="eye"
      className={style.eyeIcon}
      onClick={() => setIsShowPassword(!isShowPassword)}
    />
  );

  return (
    <div className={style.wrapper}>
      <input
        type={!isShowPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={style.input}
      />

      <img src={image} alt={image} className={style.img} />

      {eyeIcon && renderEyeIcon}
    </div>
  );
};
