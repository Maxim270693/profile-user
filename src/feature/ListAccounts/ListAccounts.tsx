import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccountUsersTC } from "../../bll/thunks/thunks";

import { Button } from "../../components/Button";
import { Account } from "../Account";
import { useNavigate } from "react-router-dom";

import ArrowBack from "../../image/arrow-back.svg";

import {
  AccountUsersType,
  useAppSelector,
  UserResponse,
} from "../../types/types";
import style from "./ListAccounts.module.scss";
import { Spinner } from "../../components/Spinner";

export const ListAccounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );
  const listAccounts = useAppSelector<AccountUsersType[]>(
    (state) => state.accounts.listAccounts
  );

  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);

  const goBackHandler = () => navigate(-1);

  useEffect(() => {
    // @ts-ignore
    dispatch(getAccountUsersTC());
  }, [dispatch]);

  useEffect(() => {
    if (!loginUser) {
      navigate("/login");
    }
  }, [loginUser, navigate]);

  return (
    <div className={style.wrapper}>
      <div className={style.accountBlock}>
        <div className={style.titleBlock}>
          <div className={style.title}>Список аккаунтов</div>

          <div className={style.btnBlock}>
            <Button className={style.btnBack} onClick={goBackHandler}>
              Вернуться назад
            </Button>
            <img src={ArrowBack} alt="ArrowBack" className={style.img} />
          </div>
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
