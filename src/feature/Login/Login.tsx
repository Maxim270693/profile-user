import { ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  emailLogin,
  passwordLogin,
} from "../../bll/actions/authActions/authActions";
import { errorsMessage } from "../../bll/actions/commonActions/actions";

import { Input } from "../../components/Input";
import { Form } from "../Form";
import { Footer } from "../Footer";
import { Spinner } from "../../components/Spinner";

import EmailIcon from "../../image/email.svg";
import PasswordIcon from "../../image/password.svg";

import { useAppSelector, UserResponse } from "../../types/types";
import style from "./Login.module.scss";

export const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);
  const isError = useAppSelector<boolean | null>(
    (state) => state.common.isError
  );
  const errorsMessageState = useAppSelector<string[]>(
    (state) => state.common.errorsMessage
  );

  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );
  const email = useAppSelector<string>((state) => state.login.email);
  const password = useAppSelector<string>((state) => state.login.password);

  const navigate = useNavigate();

  const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(emailLogin(event.target.value));
    dispatch(errorsMessage([]));
  };
  const onChangePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(passwordLogin(event.target.value));
    dispatch(errorsMessage([]));
  };

  useEffect(() => {
    if (!isError && loginUser) {
      navigate("/");
    }
  }, [loginUser]);

  const renderErrorMessage = (type: string) => {
    return (
      !!errorsMessageState.length && (
        <div>
          {errorsMessageState.map((err, index) => {
            if (err.split(" ")[1] === type) {
              return (
                <div key={index} className="errorMessage">
                  {err}
                </div>
              );
            }
          })}
        </div>
      )
    );
  };

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
              image={EmailIcon}
            />

            {renderErrorMessage("email")}

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

            {renderErrorMessage("password")}
          </Form>
        )}
      </div>

      <Footer />
    </div>
  );
};
