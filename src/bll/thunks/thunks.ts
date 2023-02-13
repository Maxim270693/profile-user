import { API } from "../../api/api";
import { Dispatch } from "redux";

import { authLogin } from "../actions/authActions/authActions";
import {
  deleteUserAC,
  getAccountUsers,
  getCurrentUserAC,
  updateCurrentUserAC,
} from "../actions/accountActions/accountActions";
import { isErrorAC, isLoadingAC } from "../actions/commonActions/actions";

import { AccountUsersType, UserLoginType } from "../../types/types";

export const authLoginTC =
  (payload: UserLoginType) => async (dispatch: Dispatch) => {
    try {
      dispatch(isLoadingAC(true));
      const res = await API.login(payload);
      dispatch(authLogin(res.data));
      localStorage.setItem("login", JSON.stringify(res.data));
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

export const deleteUserTC = (userId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(isLoadingAC(true));
    const res = await API.deleteAccount(userId);
    dispatch(deleteUserAC(res.data.id));
  } catch (e: any) {
    dispatch(isErrorAC(true));
    console.log("error", e.response.data);
    alert(e.response.data.message);
  } finally {
    dispatch(isLoadingAC(false));
  }
};

export const updateCurrentUserTC =
  (userId: number, payload: AccountUsersType) => async (dispatch: Dispatch) => {
    try {
      dispatch(isLoadingAC(true));
      const res = await API.updateCurrentAccount(userId, payload);
      dispatch(updateCurrentUserAC(res.data));
    } catch (e: any) {
      dispatch(isErrorAC(true));
      console.log("error", e.message);
      alert(e.message);
    } finally {
      dispatch(isLoadingAC(false));
    }
  };
