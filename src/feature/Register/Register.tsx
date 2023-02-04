import { ChangeEvent, useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import UserIcon from "../../image/user.svg";
import EmailIcon from "../../image/email.svg";
import PasswordIcon from "../../image/password.svg";

import style from "./Register.module.scss";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.log("formData", formData);

  return (
    <div className={style.wrapper}>
      <form action="" className={style.formRegister}>
        <h1>
          Регистрация <br /> в Yoldi Agency
        </h1>
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          name="name"
          onChange={onChangeHandler}
          image={UserIcon}
        />
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          name="email"
          onChange={onChangeHandler}
          image={EmailIcon}
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          name="password"
          onChange={onChangeHandler}
          image={PasswordIcon}
          eyeIcon={true}
          eyeCloseIcon={true}
        />

        <Button disabled={true}>Создать аккаунт</Button>
      </form>
    </div>
  );
};
