import { httpClient } from "../utils/HttpClient";
import {
  HTTP_ACCOUNT_SUCCESS,
  HTTP_ACCOUNT_FETCHING,
  HTTP_ACCOUNT_FAILED,
  server
} from "../constants";

const setStateAccountToSuccess = payload => ({
  type: HTTP_ACCOUNT_SUCCESS,
  payload: payload
});

const setStateAccountToFetching = () => ({
  type: HTTP_ACCOUNT_FETCHING
});

const setStateAccountToFailed = () => ({
  type: HTTP_ACCOUNT_FAILED
});

export const deleteAccount = id => {
  return dispatch => {
    dispatch(setStateAccountToFetching());
    httpClient
      .delete(`${server.ACCOUNT_URL}/id/${id}`)
      .then(result => {
        doGetAccounts(dispatch);
      })
      .catch(err => {
        console.log(err);
        dispatch(setStateAccountToFailed());
      });
  };
};


export const addAccount = (history,data)=>{
  return dispatch=>{
    httpClient.post(server.ACCOUNT_URL,data).then(result=>{
      history.goBack();
    })
  }
}

export const getAccountByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateAccountToFetching());
    
    if (keyword !== null && keyword != "") {
      httpClient.get(`${server.ACCOUNT_URL}/name/${keyword}`).then(result => {
        dispatch(setStateAccountToSuccess(result.data));
      });
    } else {
      doGetAccounts(dispatch);
    }
  };
};

const doGetAccounts = (dispatch)=>{
  httpClient
  .get(server.ACCOUNT_URL)
  .then(result => {
    dispatch(setStateAccountToSuccess(result.data));
    console.log("Log " + result.data);
  })
  .catch(err => {
    console.log(server.ACCOUNT_URL);
    console.log(err);
    dispatch(setStateAccountToFailed());
  });
}


export const getAccount = (dispatch) => {
  return dispatch => {
    dispatch(setStateAccountToFetching());
    doGetAccounts(dispatch);

  };
};

