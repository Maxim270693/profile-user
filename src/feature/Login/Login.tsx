import { ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authLoginTC } from "../../bll/thunks/thunks";
import { useNavigate } from "react-router-dom";

import {
  emailLogin,
  passwordLogin,
} from "../../bll/actions/authActions/authActions";

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
  const isError = useAppSelector<boolean | null>(
    (state) => state.common.isError
  );
  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );
  const email = useAppSelector<string>((state) => state.login.email);
  const password = useAppSelector<string>((state) => state.login.password);

  const navigate = useNavigate();

  const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(emailLogin(event.target.value));
  };
  const onChangePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(passwordLogin(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore
    dispatch(authLoginTC({ email, password }));
  };

  /*
    email: "superman@gmail.com",
    password: "123456"
  */

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
              placeholder="Email"
              value={email}
              name="email"
              onChange={onChangeEmailHandler}
              image={UserIcon}
            />

            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              name="password"
              onChange={onChangePasswordHandler}
              image={PasswordIcon}
              eyeIcon={true}
              eyeCloseIcon={true}
            />

            <Button type="submit" className={style.createAccount}>
              Войти
            </Button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};
