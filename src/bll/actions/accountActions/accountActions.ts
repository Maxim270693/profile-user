import { CURRENT_ACCOUNT, GET_ACCOUNTS } from "../../../constants/constants";
import { AccountUsersType } from "../../../types/types";

export const getAccountUsers = (payload: AccountUsersType[]) =>
  ({ type: GET_ACCOUNTS, payload } as const);

export const getCurrentUserAC = (payload: AccountUsersType) =>
  ({ type: CURRENT_ACCOUNT, payload } as const);
