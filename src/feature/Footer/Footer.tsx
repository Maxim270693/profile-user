import style from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>
        Еще нет аккаунта?{" "}
        <NavLink to={"/register"}>
          <span className={style.textItem}>Зарегистрироваться</span>
        </NavLink>
      </p>
    </div>
  );
};
