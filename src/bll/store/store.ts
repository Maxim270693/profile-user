import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { commonReducer } from "../reducers/commonReducer";

export const rootReducer = combineReducers({
  common: commonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
