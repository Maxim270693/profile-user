import { AUTH_LOGIN, IS_ERROR, IS_LOADING } from "../../../constants/constants";

export const isLoadingAC = (payload: boolean) =>
  ({ type: IS_LOADING, payload } as const);

export const isErrorAC = (payload: boolean | null) =>
  ({ type: IS_ERROR, payload } as const);

export const isLoginAC = (payload: boolean) =>
  ({ type: AUTH_LOGIN, payload } as const);
