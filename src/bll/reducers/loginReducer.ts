import {
  ActionTypeLogin,
  InitialStateLoginType,
  UserResponse,
} from "../../types/types";
import {
  AUTH_LOGIN,
  EMAIL_USER,
  PASSWORD_USER,
} from "../../constants/constants";

const temp = localStorage.getItem("login");

export const initialStateLogin = {
  loginUser: temp ? JSON.parse(temp) : (null as UserResponse | null),
  email: "",
  password: "",
};

export const loginReducer = (
  state = initialStateLogin,
  action: ActionTypeLogin
): InitialStateLoginType => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, loginUser: action.payload };
    case EMAIL_USER:
      return { ...state, email: action.payload };
    case PASSWORD_USER:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
