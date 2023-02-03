import logo from "../../image/logo.svg";
import { Button } from "../../components/Button";

import style from "./Header.module.scss";

export const Header = () => {
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

      <div>
        <Button>Войти</Button>
      </div>
    </div>
  );
};
