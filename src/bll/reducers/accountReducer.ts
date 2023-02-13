import {
  AccountUsersType,
  ActionTypeAccounts,
  InitialStateAccount,
} from "../../types/types";
import {
  CURRENT_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  UPDATE_ACCOUNT,
} from "../../constants/constants";

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
    case DELETE_ACCOUNT:
      return {
        ...state,
        listAccounts: state.listAccounts.filter(
          (item) => item.id !== action.payload
        ),
      };
    case UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};
