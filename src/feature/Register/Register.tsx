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
  const errorsMessage = useAppSelector<string[]>(
    (state) => state.common.errorsMessage
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

  const renderErrorMessage = (type: string) => {
    return (
      !!errorsMessage.length && (
        <div>
          {errorsMessage.map((err, index) => {
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
            placeholder="Name"
            value={name ? name : ""}
            name="name"
            onChange={onChangeNameHandler}
            image={UserIcon}
          />

          {renderErrorMessage("name")}

          <Input
            type="text"
            placeholder="Email"
            value={email ? email : ""}
            name="email"
            onChange={onChangeEmailHandler}
            image={EmailIcon}
          />

          {renderErrorMessage("email")}

          <Input
            type="text"
            placeholder="Phone"
            value={phone ? phone : ""}
            name="phone"
            onChange={onChangePhoneHandler}
            image={PhoneIcon}
          />

          {renderErrorMessage("phone")}

          <Input
            type="password"
            placeholder="Password"
            value={password ? password : ""}
            name="password"
            onChange={onChangePasswordHandler}
            image={PasswordIcon}
            eyeIcon={true}
          />

          {renderErrorMessage("password")}

          <Input
            type="password"
            placeholder="Password Confirmation"
            value={passwordConfirmation ? passwordConfirmation : ""}
            name="passwordConfirmation"
            onChange={onChangePasswordConfirmationHandler}
            image={PasswordIcon}
            eyeIcon={true}
          />

          {renderErrorMessage("password confirmation")}
        </Form>
      )}
    </div>
  );
};
