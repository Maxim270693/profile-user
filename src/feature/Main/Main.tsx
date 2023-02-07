import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../../bll/actions/authActions/authActions";

import { Button } from "../../components/Button";
import { EditUser } from "../EditUser";
import { Characters } from "../../components/Characters";

import edit from "../../image/edit.svg";
import backIcon from "../../image/back.svg";

import { useAppSelector, UserResponse } from "../../types/types";
import style from "./Main.module.scss";

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  const showModalHandler = () => setIsEdit(true);

  useEffect(() => {
    if (!loginUser) {
      navigate("/login");
    }
  }, [loginUser]);

  return (
    <>
      <EditUser isEdit={isEdit} setIsEdit={setIsEdit} />

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

          <div className={style.editBlock} onClick={showModalHandler}>
            <Button className={style.editBtn}>Редактировать</Button>
            <img src={edit} alt="edit" className={style.img} />
          </div>
        </div>

        <div className={style.aboutBlock}>
          <p className={style.email}>{loginUser?.result.email}</p>

          <p className={style.about}>
            Рыбатекст используется дизайнерами, проектировщиками и
            фронтендерами, когда нужно быстро заполнить макеты или прототипы
            содержимым. Это тестовый контент, который не должен нести никакого
            смысла, лишь показать наличие самого текста или продемонстрировать
            типографику в деле.
          </p>

          <div className={style.backBlock}>
            <img src={backIcon} alt="backIcon" className={style.img} />
            <Button
              className={style.backBtn}
              onClick={() => dispatch(authLogin(null))}
            >
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
