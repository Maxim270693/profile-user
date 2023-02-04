import { AUTH_LOGIN } from "../../../constants/constants";
import { UserResponse } from "../../../types/types";

export const authLogin = (payload: UserResponse) =>
  ({ type: AUTH_LOGIN, payload } as const);
