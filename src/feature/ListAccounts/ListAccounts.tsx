import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccountUsersTC } from "../../bll/thunks/thunks";

import { Button } from "../../components/Button";
import { Account } from "../Account";
import { Spinner } from "../../components/Spinner";
import { ModalUser } from "../ModalUser";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";

import ArrowBack from "../../image/arrow-back.svg";

import { useRedirectNotLoggedIn } from "../../utils/utils";

import { AccountUsersType, useAppSelector } from "../../types/types";
import style from "./ListAccounts.module.scss";

export const ListAccounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const listAccounts = useAppSelector<AccountUsersType[]>(
    (state) => state.accounts.listAccounts
  );

  const currentUser = useAppSelector<AccountUsersType | null>(
    (state) => state.accounts.account
  );

  const isLoading = useAppSelector<boolean>((state) => state.common.isLoading);

  const goBackHandler = () => navigate(-1);

  const onShowAddModal = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(getAccountUsersTC());
  }, [dispatch]);

  useRedirectNotLoggedIn();

  return (
    <div className={style.wrapper}>
      <div className={style.accountBlock}>
        <div className={style.titleBlock}>
          <div className={style.title}>Список аккаунтов</div>

          <ModalUser
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            currentUser={currentUser}
            type="add"
          />

          <Button onClick={onShowAddModal}>Добавить аккаунт</Button>

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
