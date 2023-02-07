import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccountUsersTC } from "../../bll/thunks/thunks";

import { Account } from "../Account";

import { AccountUsersType, useAppSelector } from "../../types/types";
import style from "./ListAccounts.module.scss";

export const ListAccounts = () => {
  const dispatch = useDispatch();

  const listAccounts = useAppSelector<AccountUsersType[]>(
    (state) => state.accounts.listAccounts
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(getAccountUsersTC());
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.accountBlock}>
        <div className={style.title}>Список аккаунтов</div>

        <div className={style.account}>
          {listAccounts.map((account) => (
            <Account account={account} />
          ))}
        </div>
      </div>
    </div>
  );
};
