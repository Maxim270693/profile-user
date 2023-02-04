import { Dispatch } from "redux";
import { API } from "../../api/api";
import { authLogin } from "../actions/authActions/authActions";
import { UserLoginType } from "../../types/types";
import { isLoadingAC } from "../actions/commonActions/actions";

export const authLoginTC =
  (payload: UserLoginType) => async (dispatch: Dispatch) => {
    try {
      dispatch(isLoadingAC(true));
      const res = await API.login(payload);
      dispatch(authLogin(res.data));
    } catch (e: any) {
      console.log("error", e.response.data);
      alert(e.response.data);
    } finally {
      dispatch(isLoadingAC(false));
    }
  };
