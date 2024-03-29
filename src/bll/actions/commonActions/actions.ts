import {
  ERRORS_MESSAGE,
  IS_ERROR,
  IS_LOADING,
} from "../../../constants/constants";

export const isLoadingAC = (payload: boolean) =>
  ({ type: IS_LOADING, payload } as const);

export const isErrorAC = (payload: boolean | null) =>
  ({ type: IS_ERROR, payload } as const);

export const errorsMessage = (payload: string[]) =>
  ({ type: ERRORS_MESSAGE, payload } as const);
