import axios from "axios";
import {
  AccountUsersType,
  AddAccountType,
  RegisterResponseType,
  RegisterType,
  UserLoginType,
  UserResponse,
} from "../types/types";

const authInstance = axios.create({
  baseURL: "https://apingweb.com/api/",
});

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const API = {
  login(payload: UserLoginType) {
    return authInstance.post<UserResponse>("login", payload);
  },
  register(payload: RegisterType) {
    return authInstance.post<RegisterResponseType>("register", payload);
  },
  getAccounts() {
    return instance.get<AccountUsersType[]>("users");
  },
  getCurrentUser(userId: number) {
    return instance.get<AccountUsersType>(`users/${userId}`);
  },
  deleteAccount(userId: number) {
    return instance.delete<AccountUsersType>(`users/${userId}`);
  },
  updateCurrentAccount(userId: number, payload: AccountUsersType) {
    return instance.put<AccountUsersType>(`users/${userId}`, payload);
  },
  addAccount(payload: AddAccountType) {
    return instance.post<AccountUsersType>("users", payload);
  },
};
