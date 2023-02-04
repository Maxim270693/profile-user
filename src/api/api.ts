import axios from "axios";
import { UserLoginType, UserResponse } from "../types/types";

export const API = {
  login(payload: UserLoginType) {
    return axios.post<UserResponse>("https://apingweb.com/api/login", payload);
  },
};
