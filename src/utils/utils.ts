import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, UserResponse } from "../types/types";

export const useInputState = (value?: string, shouldUpdate?: true) => {
  const [state, setState] = useState(value);

  const onChange = (event: ChangeEvent<HTMLInputElement> | string) => {
    setState(typeof event === "string" ? event : event.target.value);
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
