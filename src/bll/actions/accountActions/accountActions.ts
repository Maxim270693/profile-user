import {
  CURRENT_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  UPDATE_ACCOUNT,
} from "../../../constants/constants";
import { AccountUsersType } from "../../../types/types";

export const getAccountUsers = (payload: AccountUsersType[]) =>
  ({ type: GET_ACCOUNTS, payload } as const);

export const getCurrentUserAC = (payload: AccountUsersType) =>
  ({ type: CURRENT_ACCOUNT, payload } as const);

export const deleteUserAC = (payload: number) =>
  ({ type: DELETE_ACCOUNT, payload } as const);

export const updateCurrentUserAC = (payload: AccountUsersType) =>
  ({ type: UPDATE_ACCOUNT, payload } as const);
