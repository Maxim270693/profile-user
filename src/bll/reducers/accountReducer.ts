import {
  AccountUsersType,
  ActionTypeAccounts,
  InitialStateAccount,
} from "../../types/types";
import { GET_ACCOUNTS } from "../../constants/constants";

export const initialStateAccount = {
  listAccounts: [] as AccountUsersType[],
};

export const accountReducer = (
  state = initialStateAccount,
  action: ActionTypeAccounts
): InitialStateAccount => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return { ...state, listAccounts: action.payload };
    default:
      return state;
  }
};
