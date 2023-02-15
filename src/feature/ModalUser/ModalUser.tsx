import { useDispatch } from "react-redux";
import { useInputState } from "../../utils/utils";
import { isErrorAC } from "../../bll/actions/commonActions/actions";
import { addAccountTC, updateCurrentUserTC } from "../../bll/thunks/thunks";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import style from "./ModalUser.module.scss";
import {
  AccountUsersType,
  RenderTitleType,
  useAppSelector,
} from "../../types/types";

interface IModalUser {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  currentUser: AccountUsersType | null;
  type: string;
}

export const ModalUser = ({
  isEdit,
  setIsEdit,
  currentUser,
  type,
}: IModalUser) => {
  const dispatch = useDispatch();

  const isError = useAppSelector<boolean | null>(
    (state) => state.common.isError
  );

  const [editFirstName, onChangeFirstNameHandler] = useInputState(
    type !== "add" ? currentUser?.name.firstname : "",
    true
  );
  const [editLastName, onChangeLastNameHandler] = useInputState(
    type !== "add" ? currentUser?.name.lastname : "",
    true
  );
  const [editEmail, onChangeEmailHandler] = useInputState(
    type !== "add" ? currentUser?.email : "",
    true
  );
  const [editCity, onChangeCityHandler] = useInputState(
    type !== "add" ? currentUser?.address.city : "",
    true
  );

  const onCloseHandler = () => {
    setIsEdit(false);
    dispatch(isErrorAC(false));
  };

  const onSaveHandler = () => {
    const payload = {
      ...currentUser,
      email: editEmail,
      name: {
        firstname: editFirstName,
        lastname: editLastName,
      },
      address: {
        ...currentUser?.address,
        city: editCity,
      },
    };

    if (
      editFirstName === "" ||
      editLastName === "" ||
      editEmail === "" ||
      editCity === ""
    ) {
      return dispatch(isErrorAC(true));
    } else {
      dispatch(isErrorAC(false));
      dispatch(
        // @ts-ignore
        type === "edit"
          ? // @ts-ignore
            updateCurrentUserTC(currentUser.id, payload)
          : // @ts-ignore
            addAccountTC(payload)
      );

      setIsEdit(false);
    }
  };

  const renderTitle = (type: string) => {
    const typeObj: RenderTitleType = {
      edit: "Редактировать профиль",
      add: "Добавить профиль",
    };

    return typeObj[type] ?? "";
  };

  return (
    <div className={style.wrapper}>
      <Modal isEdit={isEdit} setIsEdit={setIsEdit}>
        <h1>{renderTitle(type)}</h1>

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

        {isError ? (
          <div className="errorMessage">Все поля должны быть заполнены</div>
        ) : (
          ""
        )}

        <div className={style.btns}>
          <Button className={style.btn} onClick={onCloseHandler}>
            Отмена
          </Button>
          <Button className={style.btnSave} onClick={onSaveHandler}>
            Сохранить
          </Button>
        </div>
      </Modal>
    </div>
  );
};
