import React from "react";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import style from "./Edit.module.scss";

interface IEdit {
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
}

export const EditUser = ({ isEdit, setIsEdit }: IEdit) => {
  return (
    <div className={style.wrapper}>
      <Modal isEdit={isEdit} setIsEdit={setIsEdit}>
        <h1>Редактировать профиль</h1>

        <div>
          <label className={style.label}>Имя</label>
          <Input
            type="text"
            placeholder="user"
            name="user"
            value="Владислав"
            onChange={() => {}}
            className={style.inputTitle}
          />
        </div>

        <div>
          <label className={style.label}>Адрес профиля</label>
          <div className={style.emailBlock}>
            <span className={style.example}>example.com/</span>
            <Input
              type="text"
              placeholder="user"
              name="user"
              value="romanov"
              onChange={() => {}}
              className={style.inputEmail}
            />
          </div>
        </div>

        <div className={style.description}>
          <label className={style.label}>Описание</label>
          <textarea className={style.textarea}>
            Рыбатекст используется дизайнерами, проектировщиками и
            фронтендерами, когда нужно быстро заполнить макеты или прототипы
            содержимым. Это тестовый контент, который не должен нести никакого
            смысла, лишь показать наличие самого текста или продемонстрировать
            типографику в деле.
          </textarea>
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
