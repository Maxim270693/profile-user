import { GET_ACCOUNTS } from "../../../constants/constants";
import { AccountUsersType } from "../../../types/types";

export const getAccountUsers = (payload: AccountUsersType[]) =>
  ({ type: GET_ACCOUNTS, payload } as const);
