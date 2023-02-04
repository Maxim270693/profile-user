import style from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={style.ldsCss}>
      <div className={style.ldsDoubleRing}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
