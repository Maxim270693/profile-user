import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Characters } from "../../components/Characters";

import edit from "../../image/edit.svg";
import backIcon from "../../image/back.svg";

import { useAppSelector, UserResponse } from "../../types/types";
import style from "./Main.module.scss";

export const Main = () => {
  const navigate = useNavigate();

  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  useEffect(() => {
    if (!loginUser) {
      navigate("/login");
    }
  }, [loginUser]);

  return (
    <>
      <div className={style.wrapper}>{""}</div>

      <div className={style.content}>
        <Characters
          name={loginUser?.result.name}
          className={style.avatarBlock}
        />
        <div className={style.titleBlock}>
          <div className={style.title}>
            {loginUser ? loginUser.result.name : ""}
          </div>

          <div className={style.editBlock}>
            <Button className={style.editBtn}>Редактировать</Button>
            <img src={edit} alt="edit" className={style.img} />
          </div>
        </div>

        <div className={style.aboutBlock}>
          <p className={style.email}>example@gmail.com</p>

          <p className={style.about}>
            Рыбатекст используется дизайнерами, проектировщиками и
            фронтендерами, когда нужно быстро заполнить макеты или прототипы
            содержимым. Это тестовый контент, который не должен нести никакого
            смысла, лишь показать наличие самого текста или продемонстрировать
            типографику в деле.
          </p>

          <div className={style.backBlock}>
            <img src={backIcon} alt="backIcon" className={style.img} />
            <Button className={style.backBtn}>Выйти</Button>
          </div>
        </div>
      </div>
    </>
  );
};
