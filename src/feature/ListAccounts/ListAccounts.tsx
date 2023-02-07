import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccountUsersTC } from "../../bll/thunks/thunks";

import { useAppSelector } from "../../types/types";
import style from "./ListAccounts.module.scss";

export const ListAccounts = () => {
  const dispatch = useDispatch();

  const listAccounts = useAppSelector<any>(
    (state) => state.accounts.listAccounts
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(getAccountUsersTC());
  }, []);

  console.log("listAccounts", listAccounts);

  return (
    <div className={style.wrapper}>
      <h1>listAccounts</h1>
      <div></div>
    </div>
  );
};
