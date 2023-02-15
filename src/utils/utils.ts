import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorsMessage, isErrorAC } from "../bll/actions/commonActions/actions";
import { useAppSelector, UserResponse } from "../types/types";

export const useInputState = (value?: string, shouldUpdate?: true) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(value);

  const onChange = (event: ChangeEvent<HTMLInputElement> | string) => {
    setState(typeof event === "string" ? event : event.target.value);
    dispatch(isErrorAC(false));
    dispatch(errorsMessage([]));
  };

  useEffect(() => {
    shouldUpdate && setState(value);
  }, [value, shouldUpdate]);

  return [state, onChange] as const;
};

export const useRedirectNotLoggedIn = () => {
  const navigate = useNavigate();

  const loginUser = useAppSelector<UserResponse | null>(
    (state) => state.login.loginUser
  );

  useEffect(() => {
    if (!loginUser) {
      navigate("/login");
    }
  }, [loginUser, navigate]);
};
