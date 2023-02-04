import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { commonReducer } from "../reducers/commonReducer";
import { loginReducer } from "../reducers/loginReducer";

export const rootReducer = combineReducers({
  common: commonReducer,
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
