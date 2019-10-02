import { httpClient } from "../utils/HttpClient";
import {
  HTTP_DEVICE_SUCCESS,
  HTTP_DEVICE_FETCHING,
  HTTP_DEVICE_FAILED,
  server
} from "../constants";

const setStateDeviceToSuccess = payload => ({
  type: HTTP_DEVICE_SUCCESS,
  payload: payload
});

const setStateDeviceToFetching = () => ({
  type: HTTP_DEVICE_FETCHING
});

const setStateDeviceToFailed = () => ({
  type: HTTP_DEVICE_FAILED
});

export const deleteDevice = id => {
  return dispatch => {
    dispatch(setStateDeviceToFetching());
    httpClient
      .delete(`${server.DEVICE_URL}/id/${id}`)
      .then(result => {
        doGetDevices(dispatch);
      })
      .catch(err => {
        console.log(err);
        dispatch(setStateDeviceToFailed());
      });
  };
};


export const addDevice = (history,data)=>{
  return dispatch=>{
    httpClient.post(server.DEVICE_URL,data).then(result=>{
      history.goBack();
    })
  }
}

export const getDeviceByKeyword = event => {
  return dispatch => {
    var keyword = event.target.value;
    dispatch(setStateDeviceToFetching());
    
    if (keyword !== null && keyword != "") {
      httpClient.get(`${server.DEVICE_URL}/name/${keyword}`).then(result => {
        dispatch(setStateDeviceToSuccess(result.data));
      });
    } else {
      doGetDevices(dispatch);
    }
  };
};

const doGetDevices = (dispatch)=>{
  httpClient
  .get(server.DEVICE_URL)
  .then(result => {
    dispatch(setStateDeviceToSuccess(result.data));
    console.log("Log " + result.data);
  })
  .catch(err => {
    console.log(server.DEVICE_URL);
    console.log(err);
    dispatch(setStateDeviceToFailed());
  });
}


export const getDevice = (dispatch) => {
  return dispatch => {
    dispatch(setStateDeviceToFetching());
    doGetDevices(dispatch);

  };
};

