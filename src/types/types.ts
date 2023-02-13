import { rootReducer } from "../bll/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { initialStateCommon } from "../bll/reducers/commonReducer";
import { initialStateLogin } from "../bll/reducers/loginReducer";
import { isErrorAC, isLoadingAC } from "../bll/actions/commonActions/actions";
import {
  authLogin,
  emailLogin,
  passwordLogin,
} from "../bll/actions/authActions/authActions";
import { initialStateAccount } from "../bll/reducers/accountReducer";
import {
  addAccountAC,
  deleteUserAC,
  getAccountUsers,
  getCurrentUserAC,
  updateCurrentUserAC,
} from "../bll/actions/accountActions/accountActions";

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
export type ActionTypeLogin =
  | authLoginActionType
  | emailLoginActionType
  | passwordLoginActionType;

export type authLoginActionType = ReturnType<typeof authLogin>;
export type emailLoginActionType = ReturnType<typeof emailLogin>;
export type passwordLoginActionType = ReturnType<typeof passwordLogin>;

// type InitialStateListAccounts
export type InitialStateAccount = typeof initialStateAccount;

// type ActionsAccounts
export type ActionTypeAccounts =
  | getAccountUserActionType
  | getCurrentUserActionType
  | deleteUserActionType
  | updateUserActionType
  | addAccountActionType;

export type getAccountUserActionType = ReturnType<typeof getAccountUsers>;
export type getCurrentUserActionType = ReturnType<typeof getCurrentUserAC>;
export type deleteUserActionType = ReturnType<typeof deleteUserAC>;
export type updateUserActionType = ReturnType<typeof updateCurrentUserAC>;
export type addAccountActionType = ReturnType<typeof addAccountAC>;

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

// type AccountUsers
export type AddressType = {
  city: string;
  geolocation: { lat: string; long: string };
  number: number;
  street: string;
  zipcode: string;
};

export type NameType = {
  firstname: string;
  lastname: string;
};

export type AccountUsersType = {
  address: AddressType;
  email: string;
  id: number;
  name: NameType;
  password: string;
  phone: string;
  username: string;
  __v?: number;
};

// type AddAccount
export type AddAccountType = {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

// RenderTitleType
export type RenderTitleType = {
  [key: string]: string;
};
