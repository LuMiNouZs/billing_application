import {
    HTTP_RATE_SUCCESS,
    HTTP_RATE_FETCHING,
    HTTP_RATE_FAILED,
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,  
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_RATE_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_RATE_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      case HTTP_RATE_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      default:
        return state;
    }
  };
  