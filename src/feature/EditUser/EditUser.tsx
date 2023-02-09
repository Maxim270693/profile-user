import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import style from "./Edit.module.scss";
import { AccountUsersType } from "../../types/types";

interface IEdit {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  currentUser: AccountUsersType | null | undefined;
}

export const EditUser = ({ isEdit, setIsEdit, currentUser }: IEdit) => {
  const dispatch = useDispatch();

  const [editFirstName, setEditFirstName] = useState(
    currentUser?.name.firstname
  );
  const [editLastName, setEditLastName] = useState(currentUser?.name.lastname);
  const [editEmail, setEditEmail] = useState(currentUser?.email);
  const [editCity, setEditCity] = useState(currentUser?.address.city);

  const onChangeFirstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditFirstName(event.target.value);
  };

  const onChangeLastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditLastName(event.target.value);
  };

  const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditEmail(event.target.value);
  };

  const onChangeCityHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditCity(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <Modal isEdit={isEdit} setIsEdit={setIsEdit}>
        <h1>Редактировать профиль</h1>

        <div>
          <label className={style.label}>Имя</label>
          <Input
            type="text"
            placeholder="username"
            name="username"
            value={editFirstName ? editFirstName : ""}
            onChange={onChangeFirstNameHandler}
            className={style.inputTitle}
          />
        </div>

        <div>
          <label className={style.label}>Фамилия</label>
          <Input
            type="text"
            placeholder="lastname"
            name="lastname"
            value={editLastName ? editLastName : ""}
            onChange={onChangeLastNameHandler}
            className={style.inputTitle}
          />
        </div>

        <div>
          <label className={style.label}>Адрес профиля</label>
          <div className={style.emailBlock}>
            <span className={style.example}>example.com/</span>
            <Input
              type="text"
              placeholder="email"
              name="email"
              value={editEmail ? editEmail.split("@")[0] : ""}
              onChange={onChangeEmailHandler}
              className={style.inputEmail}
            />
          </div>
        </div>

        <div>
          <label className={style.label}>Город</label>
          <Input
            type="text"
            placeholder="city"
            name="city"
            value={editCity ? editCity : ""}
            onChange={onChangeCityHandler}
            className={style.inputTitle}
          />
        </div>

        <div className={style.btns}>
          <Button className={style.btn} onClick={() => setIsEdit(false)}>
            Отмена
          </Button>
          <Button className={style.btnSave}>Сохранить</Button>
        </div>
      </Modal>
    </div>
  );
};
