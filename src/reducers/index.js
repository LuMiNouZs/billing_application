import { combineReducers } from "redux";
import appReducer from "./app.reducer";
import loginReducer from "./login.reducer";
import billingReducer from "./billing.reducer";
import cdrReducer from "./cdr.reducer";
import accountReducer from "./account.reducer";
import accountEditReducer from './account.edit.reducer'
import deviceReducer from './device.reducer'
import rateReducer from './rate.reducer'
import transactionReducer from './transaction.reducer'


import { reducer as form } from "redux-form";

export default combineReducers({
  loginReducer,
  appReducer,
  billingReducer,
  cdrReducer,
  accountReducer,
  accountEditReducer,
  deviceReducer,
  rateReducer,
  transactionReducer,
  form
});
