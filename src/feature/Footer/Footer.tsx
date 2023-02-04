import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>
        Еще нет аккаунта?{" "}
        <span className={style.textItem}>Зарегистрироваться</span>
      </p>
    </div>
  );
};
