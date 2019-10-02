import { httpClient } from "../utils/HttpClient";
import {
  HTTP_RATE_SUCCESS,
  HTTP_RATE_FETCHING,
  HTTP_RATE_FAILED,
  server
} from "../constants";

const setStateRateToSuccess = payload => ({
  type: HTTP_RATE_SUCCESS,
  payload: payload
});

const setStateRateToFetching = () => ({
  type: HTTP_RATE_FETCHING
});

const setStateRateToFailed = () => ({
  type: HTTP_RATE_FAILED
});

export const deleteRate = id => {
  return dispatch => {
    dispatch(setStateRateToFetching());
    httpClient
      .delete(`${server.RATE_URL}/id/${id}`)
      .then(result => {
        doGetRates(dispatch);
      })
      .catch(err => {
        console.log(err);
        dispatch(setStateRateToFailed());
      });
  };
};


export const addRate = (history,data)=>{
  return dispatch=>{
    httpClient.post(server.RATE_URL,data).then(result=>{
      history.goBack();
    })
  }
}

export const getRateByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateRateToFetching());
    
    if (keyword !== null && keyword != "") {
      httpClient.get(`${server.RATE_URL}/name/${keyword}`).then(result => {
        dispatch(setStateRateToSuccess(result.data));
      });
    } else {
      doGetRates(dispatch);
    }
  };
};

const doGetRates = (dispatch)=>{
  httpClient
  .get(server.RATE_URL)
  .then(result => {
    dispatch(setStateRateToSuccess(result.data));
    console.log("Log " + result.data);
  })
  .catch(err => {
    console.log(server.RATE_URL);
    console.log(err);
    dispatch(setStateRateToFailed());
  });
}


export const getRate = (dispatch) => {
  return dispatch => {
    dispatch(setStateRateToFetching());
    doGetRates(dispatch);

  };
};

