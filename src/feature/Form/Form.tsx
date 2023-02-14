import { FormEvent, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { authLoginTC, authRegisterTC } from "../../bll/thunks/thunks";

import { Button } from "../../components/Button";

import { RenderTitleType } from "../../types/types";
import style from "./Form.module.scss";

interface IFormProps {
  type: "login" | "register";
  children: ReactNode;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  name?: string;
  phone?: string;
}

export const Form = ({
  type,
  children,
  email,
  password,
  name,
  phone,
  passwordConfirmation,
}: IFormProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (type === "login") {
      // @ts-ignore
      dispatch(authLoginTC({ email, password }));
    } else {
      dispatch(
        // @ts-ignore
        authRegisterTC({
          name: name ? name : "",
          email: email ? email : "",
          phone: phone ? phone : "",
          password: password ? password : "",
          password_confirmation: passwordConfirmation
            ? passwordConfirmation
            : "",
        })
      );
    }
  };

  const renderFormTitle = (type: string) => {
    const obj: RenderTitleType = {
      login: "Вход в Yoldi Agency",
      register: "Регистрация в Yoldi Agency",
    };

    return obj[type];
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit} className={style.formRegister}>
        <h1>{renderFormTitle(type)}</h1>

        {children}

        <Button type="submit" className={style.createAccount}>
          Войти
        </Button>
      </form>
    </div>
  );
};
