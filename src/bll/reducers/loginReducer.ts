import { ActionTypeLogin } from "../../types/types";
import { AUTH_LOGIN } from "../../constants/constants";

export const initialStateLogin = {
  isLogin: false,
};

export const loginReducer = (
  state = initialStateLogin,
  action: ActionTypeLogin
) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
