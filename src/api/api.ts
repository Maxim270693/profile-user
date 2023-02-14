import axios from "axios";
import {
  AccountUsersType,
  AddAccountType,
  RegisterResponseType,
  RegisterType,
  UserLoginType,
  UserResponse,
} from "../types/types";

export const API = {
  login(payload: UserLoginType) {
    return axios.post<UserResponse>("https://apingweb.com/api/login", payload);
  },
  register(payload: RegisterType) {
    return axios.post<RegisterResponseType>(
      "https://apingweb.com/api/register",
      payload
    );
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
  updateCurrentAccount(userId: number, payload: AccountUsersType) {
    return axios.put<AccountUsersType>(
      `https://fakestoreapi.com/users/${userId}`,
      payload
    );
  },
  addAccount(payload: AddAccountType) {
    return axios.post<AccountUsersType>(
      "https://fakestoreapi.com/users",
      payload
    );
  },
};
