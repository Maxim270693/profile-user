import { Dispatch } from "redux";
import { API } from "../../api/api";
import { authLogin } from "../actions/authActions/authActions";
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
