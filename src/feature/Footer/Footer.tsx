import style from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { errorsMessage } from "../../bll/actions/commonActions/actions";

export const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.wrapper}>
      <p className={style.text}>
        Еще нет аккаунта?{" "}
        <NavLink to={"/register"} onClick={() => dispatch(errorsMessage([]))}>
          <span className={style.textItem}>Зарегистрироваться</span>
        </NavLink>
      </p>
    </div>
  );
};
