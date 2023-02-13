import { useState } from "react";

import { MyLoader } from "../../components/Sceleton";
import { ModalUser } from "../ModalUser";
import { Characters } from "../../components/Characters";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";

import background from "../../image/background.svg";
import editIcon from "../../image/edit.svg";

import { useRedirectNotLoggedIn } from "../../utils/utils";

import { AccountUsersType, useAppSelector } from "../../types/types";
import style from "./CurrentAccount.module.scss";

export const CurrentAccount = () => {
  const [isEdit, setIsEdit] = useState(false);

  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);

  const currentUser = useAppSelector<AccountUsersType | null>(
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

            <ButtonWithIcon
              alt="editIcon"
              img={editIcon}
              onClick={() => setIsEdit(true)}
              title="Редактировать"
            />
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

  useRedirectNotLoggedIn();

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperItem}>
        <div>
          <img src={background} alt="background" />
        </div>

        <ModalUser
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          currentUser={currentUser}
          type="edit"
        />

        {renderCurrentAccount()}
      </div>
    </div>
  );
};
