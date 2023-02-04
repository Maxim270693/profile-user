import { useAppSelector, UserResponse } from "../../types/types";

import logo from "../../image/logo.svg";

import { Button } from "../../components/Button";

import style from "./Header.module.scss";

export const Header = () => {
  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  const characters = loginUser?.result.name.replace(/(.).+ (.).+/, "$1$2");

  return (
    <div className={style.wrapper}>
      <div className={style.logoBlock}>
        <div className={style.image}>
          <img src={logo} alt="logo" />
        </div>

        <div className={style.text}>
          <p>Разрабатываем и запускаем сложные веб проекты</p>
        </div>
      </div>

      {loginUser ? (
        <div className={style.nameBlock}>
          <div>{loginUser.result.name}</div>
          <div className={style.avatar}>{characters}</div>
        </div>
      ) : (
        <div>
          <Button>Войти</Button>
        </div>
      )}
    </div>
  );
};
