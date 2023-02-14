import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { commonReducer } from "../reducers/commonReducer";
import { accountReducer } from "../reducers/accountReducer";
import { registerReducer } from "../reducers/registerReducer";

export const rootReducer = combineReducers({
  common: commonReducer,
  login: loginReducer,
  register: registerReducer,
  accounts: accountReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
