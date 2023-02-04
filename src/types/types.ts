import { rootReducer } from "../bll/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// type Store
export type RootStateType = ReturnType<typeof rootReducer>;

// type ActionsCommon
export type ActionTypeCommon = any;

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
