import {
    HTTP_DEVICE_SUCCESS,
    HTTP_DEVICE_FETCHING,
    HTTP_DEVICE_FAILED,
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,  
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_DEVICE_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_DEVICE_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      case HTTP_DEVICE_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      default:
        return state;
    }
  };
  