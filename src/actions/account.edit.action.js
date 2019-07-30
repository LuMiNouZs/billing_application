import { httpClient } from "../utils/HttpClient";
import {
  HTTP_ACCOUNT_EDIT_SUCCESS,
  HTTP_ACCOUNT_EDIT_FETCHING,
  HTTP_ACCOUNT_EDIT_FAILED,
  HTTP_ACCOUNT_EDIT_INITIALED,
  server
} from "../constants";

const setStateAccountToSuccess = payload => ({
  type: HTTP_ACCOUNT_EDIT_SUCCESS,
  payload: payload
});

const setStateAccountToFetching = () => ({
  type: HTTP_ACCOUNT_EDIT_FETCHING,
});

const setStateAccountToFailed = () => ({
  type: HTTP_ACCOUNT_EDIT_FAILED
});

const setStateAccountToInitialed = (isFinished) => ({
  type: HTTP_ACCOUNT_EDIT_INITIALED,
  payload: isFinished
});

export const finishInitialization = (isFinished)=>{
  return dispatch => {
    dispatch(setStateAccountToInitialed(isFinished))
  }
} 


export const getAccountById = (_id) => {  
  return dispatch => {
    dispatch(finishInitialization(false))
    dispatch(setStateAccountToFetching())
    httpClient
    .get(`${server.ACCOUNT_URL}/id/${_id}`)
    .then(result => {
      dispatch(setStateAccountToSuccess(result.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(setStateAccountToFailed());
    });
  };
};


export const updateAccount = (history, data)=>{
  return dispatch => {
    dispatch(setStateAccountToFetching())
    httpClient.put(server.ACCOUNT_URL, data).then(result => {      
      history.goBack();
    });
  }
}