import {
  ActionsRegisterType,
  InitialStateRegisterType,
  RegisterResponseType,
} from "../../types/types";
import { AUTH_REGISTER } from "../../constants/constants";

export const initialStateRegister = {
  isRegister: {} as RegisterResponseType,
};

export const registerReducer = (
  state = initialStateRegister,
  action: ActionsRegisterType
): InitialStateRegisterType => {
  switch (action.type) {
    case AUTH_REGISTER:
      return { ...state, isRegister: action.payload };
    default:
      return state;
  }
};
