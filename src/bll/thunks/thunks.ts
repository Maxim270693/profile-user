import { API } from "../../api/api";
import { Dispatch } from "redux";

import { authLogin } from "../actions/authActions/authActions";
import {
  getAccountUsers,
  getCurrentUserAC,
} from "../actions/accountActions/accountActions";
import { isErrorAC, isLoadingAC } from "../actions/commonActions/actions";

import { UserLoginType } from "../../types/types";

export const authLoginTC =
  (payload: UserLoginType) => async (dispatch: Dispatch) => {
    try {
      dispatch(isLoadingAC(true));
      const res = await API.login(payload);
      dispatch(authLogin(res.data));
      dispatch(isErrorAC(false));
    } catch (e: any) {
      dispatch(isErrorAC(true));
      console.log("error", e.response.data);
      alert(e.response.data.message);
    } finally {
      dispatch(isLoadingAC(false));
    }
  };

export const getAccountUsersTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(isLoadingAC(true));
    const res = await API.getAccounts();
    dispatch(getAccountUsers(res.data));
  } catch (e: any) {
    dispatch(isErrorAC(true));
    console.log("error", e.response.data);
    alert(e.response.data.message);
  } finally {
    dispatch(isLoadingAC(false));
  }
};

export const getCurrentUserTC =
  (userId: number) => async (dispatch: Dispatch) => {
    try {
      dispatch(isLoadingAC(true));
      const res = await API.getCurrentUser(userId);
      dispatch(getCurrentUserAC(res.data));
    } catch (e: any) {
      dispatch(isErrorAC(true));
      console.log("error", e.response.data);
      alert(e.response.data.message);
    } finally {
      dispatch(isLoadingAC(false));
    }
  };
