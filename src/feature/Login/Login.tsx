import { ChangeEvent, FormEvent, useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import UserIcon from "../../image/user.svg";
import PasswordIcon from "../../image/password.svg";

import style from "./Login.module.scss";
import { useDispatch } from "react-redux";
import { authLoginTC } from "../../bll/thunks/thunks";
import { useAppSelector } from "../../types/types";

export const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);

  const [formData, setFormData] = useState({
    email: "superman@gmail.com",
    password: "123456",
  });

  const { email, password } = formData;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore
    dispatch(authLoginTC(formData));
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit} className={style.formRegister}>
        <h1>Вход в Yoldi Agency</h1>

        <Input
          type="text"
          placeholder="Имя"
          value={email}
          name="username"
          onChange={onChangeHandler}
          image={UserIcon}
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

        <Button
          type="submit"
          className={style.createAccount}
          onClick={() => setFormData(formData)}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
