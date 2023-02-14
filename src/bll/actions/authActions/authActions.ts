import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  EMAIL_USER,
  PASSWORD_USER,
} from "../../../constants/constants";
import { RegisterResponseType, UserResponse } from "../../../types/types";

export const authLogin = (payload: UserResponse | null) =>
  ({ type: AUTH_LOGIN, payload } as const);

export const authRegister = (payload: RegisterResponseType) =>
  ({ type: AUTH_REGISTER, payload } as const);

export const emailLogin = (payload: string) =>
  ({ type: EMAIL_USER, payload } as const);

export const passwordLogin = (payload: string) =>
  ({ type: PASSWORD_USER, payload } as const);
