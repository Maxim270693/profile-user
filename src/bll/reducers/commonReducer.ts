import { ActionTypeCommon, InitialStateCommonType } from "../../types/types";
import {
  ERRORS_MESSAGE,
  IS_ERROR,
  IS_LOADING,
} from "../../constants/constants";

export const initialStateCommon = {
  isLoading: false,
  isError: null as boolean | null,
  errorsMessage: [] as string[],
};

export const commonReducer = (
  state = initialStateCommon,
  action: ActionTypeCommon
): InitialStateCommonType => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case IS_ERROR:
      return { ...state, isError: action.payload };
    case ERRORS_MESSAGE:
      return { ...state, errorsMessage: action.payload };
    default:
      return state;
  }
};
