import { Characters } from "../../components/Characters";

import { AccountUsersType } from "../../types/types";
import style from "./Account.module.scss";

interface IAccountProps {
  account: AccountUsersType;
}

export const Account = ({ account }: IAccountProps) => {
  const fullName = `${account.name.firstname} ${account.name.lastname}`;

  return (
    <div className={style.wrapper}>
      <div className={style.avatarBlock}>
        <Characters name={fullName.toUpperCase()} className={style.avatar} />
        <div>{fullName}</div>
      </div>

      <div>{account.email}</div>
    </div>
  );
};
