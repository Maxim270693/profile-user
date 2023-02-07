import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { commonReducer } from "../reducers/commonReducer";
import { loginReducer } from "../reducers/loginReducer";
import { accountReducer } from "../reducers/accountReducer";

export const rootReducer = combineReducers({
  common: commonReducer,
  login: loginReducer,
  accounts: accountReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
