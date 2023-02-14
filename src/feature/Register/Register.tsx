import { Form } from "../Form";
import { Navigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Spinner } from "../../components/Spinner";

import UserIcon from "../../image/user.svg";
import EmailIcon from "../../image/email.svg";
import PhoneIcon from "../../image/phone.svg";
import PasswordIcon from "../../image/password.svg";

import { useInputState } from "../../utils/utils";

import { RegisterResponseType, useAppSelector } from "../../types/types";
import style from "./Register.module.scss";

export const Register = () => {
  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);
  const isRegister = useAppSelector<RegisterResponseType>(
    (state) => state.register.isRegister
  );

  const [name, onChangeNameHandler] = useInputState("");
  const [email, onChangeEmailHandler] = useInputState("");
  const [phone, onChangePhoneHandler] = useInputState("");
  const [password, onChangePasswordHandler] = useInputState("");
  const [passwordConfirmation, onChangePasswordConfirmationHandler] =
    useInputState("");

  if (isRegister.status === 200) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Form
          type="register"
          email={email}
          password={password}
          name={name}
          phone={phone}
          passwordConfirmation={passwordConfirmation}
        >
          <Input
            type="text"
            placeholder="name"
            value={name ? name : ""}
            name="name"
            onChange={onChangeNameHandler}
            image={UserIcon}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email ? email : ""}
            name="email"
            onChange={onChangeEmailHandler}
            image={EmailIcon}
          />
          <Input
            type="text"
            placeholder="phone"
            value={phone ? phone : ""}
            name="phone"
            onChange={onChangePhoneHandler}
            image={PhoneIcon}
          />
          <Input
            type="password"
            placeholder="password"
            value={password ? password : ""}
            name="password"
            onChange={onChangePasswordHandler}
            image={PasswordIcon}
          />
          <Input
            type="password"
            placeholder="password_confirmation"
            value={passwordConfirmation ? passwordConfirmation : ""}
            name="passwordConfirmation"
            onChange={onChangePasswordConfirmationHandler}
            image={PasswordIcon}
          />
        </Form>
      )}
    </div>
  );
};
