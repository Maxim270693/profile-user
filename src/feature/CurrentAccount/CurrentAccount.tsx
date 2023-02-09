import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { EditUser } from "../EditUser";
import { MyLoader } from "../../components/Sceleton";
import { Characters } from "../../components/Characters";

import background from "../../image/background.svg";
import editIcon from "../../image/edit.svg";

import {
  AccountUsersType,
  useAppSelector,
  UserResponse,
} from "../../types/types";
import style from "./CurrentAccount.module.scss";

export const CurrentAccount = () => {
  const navigate = useNavigate();

  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);
  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  const [isEdit, setIsEdit] = useState(false);

  const currentUser = useAppSelector<AccountUsersType | null | undefined>( // норм такая типизация ?
    (state) => state.accounts.account
  );

  const fullName = `${currentUser?.name.firstname} ${currentUser?.name.lastname}`;

  const str = fullName.replace(/(^|\s)\S/g, function (letter) {
    return letter.toUpperCase();
  });

  const renderCurrentAccount = () => {
    if (isLoading) {
      return <MyLoader />;
    }

    return (
      <div className={style.currentBlock}>
        <div className={style.avatarBlock}>
          <Characters
            name={currentUser ? fullName.toUpperCase() : ""}
            className={style.avatar}
          />
          <div className={style.title}>{currentUser ? str : ""}</div>
        </div>

        <div className={style.aboutBlock}>
          <div className={style.aboutItem}>
            <div>
              <div className={style.item}>
                <div className={style.itemTitle}>Email:</div>
                <div>{currentUser?.email}</div>
              </div>
              <div className={style.item}>
                <div className={style.itemTitle}>Username:</div>
                <div>{currentUser?.username}</div>
              </div>
            </div>

            <div className={style.editBlock}>
              <img src={editIcon} alt="editIcon" className={style.image} />
              <Button className={style.editBtn} onClick={() => setIsEdit(true)}>
                Редактировать
              </Button>
            </div>
          </div>

          <div className={style.aboutBlockBottom}>
            <div className={style.item}>
              <div className={style.itemTitle}>Mobile Phone:</div>
              <div>{currentUser?.phone}</div>
            </div>

            <div className={style.item}>
              <div className={style.itemTitle}>City:</div>
              <div>{currentUser?.address?.city}</div>
            </div>

            <div className={style.item}>
              <div className={style.itemTitle}>Street:</div>
              <div>{currentUser?.address?.street}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!loginUser) {
      navigate("/login");
    }
  }, [loginUser]);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperItem}>
        <div>
          <img src={background} alt="background" />
        </div>

        {isEdit ? (
          <EditUser
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            currentUser={currentUser}
          />
        ) : (
          <>{renderCurrentAccount()}</>
        )}
      </div>
    </div>
  );
};
