import { useDispatch } from "react-redux";
import { useInputState } from "../../utils/utils";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import style from "./Edit.module.scss";
import { AccountUsersType } from "../../types/types";

interface IEdit {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  currentUser: AccountUsersType | null;
}

export const EditUser = ({ isEdit, setIsEdit, currentUser }: IEdit) => {
  const dispatch = useDispatch();

  const [editFirstName, onChangeFirstNameHandler] = useInputState(
    currentUser?.name.firstname,
    true
  );
  const [editLastName, onChangeLastNameHandler] = useInputState(
    currentUser?.name.lastname,
    true
  );
  const [editEmail, onChangeEmailHandler] = useInputState(
    currentUser?.email,
    true
  );
  const [editCity, onChangeCityHandler] = useInputState(
    currentUser?.address.city,
    true
  );

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
