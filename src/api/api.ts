import axios from "axios";
import { AccountUsersType, UserLoginType, UserResponse } from "../types/types";

export const API = {
  login(payload: UserLoginType) {
    return axios.post<UserResponse>("https://apingweb.com/api/login", payload);
  },
  getAccounts() {
    return axios.get<AccountUsersType[]>("https://fakestoreapi.com/users");
  },
  getCurrentUser(userId: number) {
    return axios.get<AccountUsersType>(
      `https://fakestoreapi.com/users/${userId}`
    );
  },
  deleteAccount(userId: number) {
    return axios.delete<AccountUsersType>(
      `https://fakestoreapi.com/users/${userId}`
    );
  },
};
