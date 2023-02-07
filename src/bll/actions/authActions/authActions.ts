import {
  AUTH_LOGIN,
  EMAIL_USER,
  PASSWORD_USER,
} from "../../../constants/constants";
import { UserResponse } from "../../../types/types";

export const authLogin = (payload: UserResponse | null) =>
  ({ type: AUTH_LOGIN, payload } as const);

export const emailLogin = (payload: string) =>
  ({ type: EMAIL_USER, payload } as const);

export const passwordLogin = (payload: string) =>
  ({ type: PASSWORD_USER, payload } as const);
