import { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  emailLogin,
  passwordLogin,
} from "../../bll/actions/authActions/authActions";

import { Input } from "../../components/Input";
import { Form } from "../Form";
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
          <Form type="login" email={email} password={password}>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={onChangeEmailHandler}
              image={UserIcon}
            />

            {/*{isError && isError}*/}

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
          </Form>
        )}
      </div>

      <Footer />
    </div>
  );
};
