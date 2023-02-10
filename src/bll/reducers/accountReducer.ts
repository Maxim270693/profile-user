import {
  AccountUsersType,
  ActionTypeAccounts,
  InitialStateAccount,
} from "../../types/types";
import { CURRENT_ACCOUNT, GET_ACCOUNTS } from "../../constants/constants";

export const initialStateAccount = {
  listAccounts: [] as AccountUsersType[],
  account: null as AccountUsersType | null,
};

export const accountReducer = (
  state = initialStateAccount,
  action: ActionTypeAccounts
): InitialStateAccount => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return { ...state, listAccounts: action.payload };
    case CURRENT_ACCOUNT:
      return {
        ...state,
        account:
          state.listAccounts.find((item) => item.id === action.payload.id) ||
          null,
      };
    default:
      return state;
  }
};
