import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccountUsersTC } from "../../bll/thunks/thunks";

import { Account } from "../Account";
import { Spinner } from "../../components/Spinner";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";

import ArrowBack from "../../image/arrow-back.svg";

import { useNavigateState } from "../../utils/utils";

import { AccountUsersType, useAppSelector } from "../../types/types";
import style from "./ListAccounts.module.scss";

export const ListAccounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listAccounts = useAppSelector<AccountUsersType[]>(
    (state) => state.accounts.listAccounts
  );

  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);

  const goBackHandler = () => navigate(-1);

  useEffect(() => {
    // @ts-ignore
    dispatch(getAccountUsersTC());
  }, [dispatch]);

  useNavigateState();

  return (
    <div className={style.wrapper}>
      <div className={style.accountBlock}>
        <div className={style.titleBlock}>
          <div className={style.title}>Список аккаунтов</div>

          <ButtonWithIcon
            alt="ArrowBack"
            img={ArrowBack}
            onClick={goBackHandler}
            title="Вернуться назад"
          />
        </div>

        {isLoading ? (
          <div className={style.spinner}>
            <Spinner />
          </div>
        ) : (
          <>
            {listAccounts.map((account) => (
              <Account account={account} key={account.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
