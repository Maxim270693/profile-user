import {
  ActionTypeLogin,
  InitialStateLoginType,
  UserResponse,
} from "../../types/types";
import { AUTH_LOGIN } from "../../constants/constants";

export const initialStateLogin = {
  loginUser: null as UserResponse | null,
};

export const loginReducer = (
  state = initialStateLogin,
  action: ActionTypeLogin
): InitialStateLoginType => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, loginUser: action.payload };
    default:
      return state;
  }
};
