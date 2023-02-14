import { NavLink } from "react-router-dom";

import logo from "../../image/logo.svg";

import { Button } from "../../components/Button";
import { Characters } from "../../components/Characters";

import { useAppSelector, UserResponse } from "../../types/types";
import style from "./Header.module.scss";

export const Header = () => {
  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  return (
    <div className={style.wrapper}>
      <div className={style.logoBlock}>
        <div className={style.image}>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className={style.text}>
          <p>Разрабатываем и запускаем сложные веб проекты</p>
        </div>
      </div>

      {loginUser ? (
        <div className={style.nameBlock}>
          <div>{loginUser.result.name}</div>
          <Characters
            name={loginUser?.result.name}
            className={style.avatarBlock}
          />
        </div>
      ) : (
        <div>
          <Button>Войти</Button>
        </div>
      )}
    </div>
  );
};
