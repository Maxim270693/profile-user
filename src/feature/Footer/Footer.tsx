import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>
        Уже есть аккаунт? <span className={style.textItem}>Войти</span>
      </p>
    </div>
  );
};
