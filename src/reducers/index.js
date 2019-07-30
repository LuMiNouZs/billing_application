import { combineReducers } from "redux";
import appReducer from "./app.reducer";
import loginReducer from "./login.reducer";
import billingReducer from "./billing.reducer";
import cdrReducer from "./cdr.reducer";
import accountReducer from "./account.reducer";
import accountEditReducer from './account.edit.reducer'
import { reducer as form } from "redux-form";

export default combineReducers({
  loginReducer,
  appReducer,
  billingReducer,
  cdrReducer,
  accountReducer,
  accountEditReducer,
  form
});
