import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserTC, getCurrentUserTC } from "../../bll/thunks/thunks";

import { Characters } from "../../components/Characters";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";

import deleteIcon from "../../image/deleteIcon.svg";
import deleteMobileIcon from "../../image/deleteMobile.svg";

import { AccountUsersType } from "../../types/types";
import style from "./Account.module.scss";

interface IAccountProps {
  account: AccountUsersType;
}

export const Account = ({ account }: IAccountProps) => {
  const dispatch = useDispatch();

  const fullName = `${account.name.firstname} ${account.name.lastname}`;

  const showModalHandler = () => {
    // @ts-ignore
    dispatch(getCurrentUserTC(account.id));
  };

  const onDeleteHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // @ts-ignore
    dispatch(deleteUserTC(account.id));
  };

  return (
    <div className={style.AccountBlock}>
      <NavLink to={`/list-accounts/${account.id}`}>
        <div className={style.wrapper} onClick={showModalHandler}>
          <div className={style.avatarBlock}>
            <Characters
              name={fullName.toUpperCase()}
              className={style.avatar}
            />
            <div>{fullName}</div>
          </div>

          <div className={style.email}>{account.email}</div>
        </div>
      </NavLink>

      <div className={style.btnDeleteMobile}>
        <img src={deleteMobileIcon} alt="deleteMobileIcon" />
      </div>

      <ButtonWithIcon
        img={deleteIcon}
        alt={deleteIcon}
        title="Удалить"
        onClick={onDeleteHandler}
        className={style.btn}
      />
    </div>
  );
};
