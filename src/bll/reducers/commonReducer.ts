import { ActionTypeCommon } from "../../types/types";
import { IS_LOADING } from "../../constants/constants";

export const initialStateCommon = {
  isLoading: false,
};

export const commonReducer = (
  state = initialStateCommon,
  action: ActionTypeCommon
) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
