import { httpClient } from "../utils/HttpClient";
import {
  HTTP_TRANSACTION_SUCCESS,
  HTTP_TRANSACTION_FETCHING,
  HTTP_TRANSACTION_FAILED,
  server
} from "../constants";

const setStateTransactionToSuccess = payload => ({
  type: HTTP_TRANSACTION_SUCCESS,
  payload: payload
});

const setStateTransactionToFetching = () => ({
  type: HTTP_TRANSACTION_FETCHING
});

const setStateTransactionToFailed = () => ({
  type: HTTP_TRANSACTION_FAILED
});

export const deleteTransaction = id => {
  return dispatch => {
    dispatch(setStateTransactionToFetching());
    httpClient
      .delete(`${server.TRANSACTION_URL}/id/${id}`)
      .then(result => {
        doGetTransactions(dispatch);
      })
      .catch(err => {
        console.log(err);
        dispatch(setStateTransactionToFailed());
      });
  };
};


export const addTransaction = (history,data)=>{
  return dispatch=>{
    httpClient.post(server.TRANSACTION_URL,data).then(result=>{
      history.goBack();
    })
  }
}

export const getTransactionByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateTransactionToFetching());
    
    if (keyword !== null && keyword != "") {
      httpClient.get(`${server.TRANSACTION_URL}/name/${keyword}`).then(result => {
        dispatch(setStateTransactionToSuccess(result.data));
      });
    } else {
      doGetTransactions(dispatch);
    }
  };
};

const doGetTransactions = (dispatch)=>{
  httpClient
  .get(server.TRANSACTION_URL)
  .then(result => {
    dispatch(setStateTransactionToSuccess(result.data));
    console.log("Log " + result.data);
  })
  .catch(err => {
    console.log(server.TRANSACTION_URL);
    console.log(err);
    dispatch(setStateTransactionToFailed());
  });
}


export const getTransaction = (dispatch) => {
  return dispatch => {
    dispatch(setStateTransactionToFetching());
    doGetTransactions(dispatch);

  };
};

