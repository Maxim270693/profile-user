import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../../bll/actions/authActions/authActions";

import { Button } from "../../components/Button";
import { Characters } from "../../components/Characters";

import backIcon from "../../image/back.svg";
import faceAccount from "../../image/faceAccount.svg";

import { useNavigateState } from "../../utils/utils";

import { useAppSelector, UserResponse } from "../../types/types";
import style from "./Main.module.scss";

export const Main = () => {
  const dispatch = useDispatch();

  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  useNavigateState();

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

          <NavLink to={"/list-accounts"}>
            <div className={style.editBlockList}>
              <Button className={style.editBtnList}>Список аккаунтов</Button>
              <img src={faceAccount} alt="face" className={style.imgList} />
            </div>
          </NavLink>
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
