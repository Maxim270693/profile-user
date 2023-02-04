import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authLoginTC } from "../../bll/thunks/thunks";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../Footer";
import { Spinner } from "../../components/Spinner";

import UserIcon from "../../image/user.svg";
import PasswordIcon from "../../image/password.svg";

import { useAppSelector, UserResponse } from "../../types/types";
import style from "./Login.module.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);
  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );
  const isError = useAppSelector<boolean | null>(
    (state) => state.common.isError
  );

  const navigate = useNavigate();

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

  useEffect(() => {
    if (!isError && loginUser) {
      navigate("/");
    }
  }, [loginUser]);

  return (
    <div>
      <div className={style.wrapper}>
        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit} className={style.formRegister}>
            <h1>Вход в Yoldi Agency</h1>

            <Input
              type="text"
              placeholder="Имя"
              value={email}
              name="email"
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
        )}
      </div>
      <Footer />
    </div>
  );
};
