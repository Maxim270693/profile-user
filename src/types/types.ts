import { rootReducer } from "../bll/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { initialStateCommon } from "../bll/reducers/commonReducer";
import { initialStateLogin } from "../bll/reducers/loginReducer";
import { isErrorAC, isLoadingAC } from "../bll/actions/commonActions/actions";
import { authLogin } from "../bll/actions/authActions/authActions";

// type Store
export type RootStateType = ReturnType<typeof rootReducer>;

// type InitialStateCommon
export type InitialStateCommonType = typeof initialStateCommon;

// type InitialStateLogin
export type InitialStateLoginType = typeof initialStateLogin;

// type ActionsCommon
export type ActionTypeCommon = IsLoadingActionType | IsErrorActionType;

export type IsLoadingActionType = ReturnType<typeof isLoadingAC>;
export type IsErrorActionType = ReturnType<typeof isErrorAC>;

// type ActionsLogin
export type ActionTypeLogin = authLoginActionType;

export type authLoginActionType = ReturnType<typeof authLogin>;

// type useSelector
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

// type UserLogin
export type UserLoginType = {
  email: string;
  password: string;
};

// type UserLoginResponse
export type ResultType = {
  created_at: string;
  email: string;
  email_verified_at: string | null;
  id: number;
  name: string;
  phone: string;
  updated_at: string;
};

export type UserResponse = {
  errors: string[];
  message: string;
  result: ResultType;
  status: number;
  success: boolean;
  token: string;
};
