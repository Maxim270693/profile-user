import { IS_LOADING } from "../../../constants/constants";

export const isLoadingAC = (payload: boolean) =>
  ({ type: IS_LOADING, payload } as const);
