import {
    HTTP_ACCOUNT_SUCCESS,
    HTTP_ACCOUNT_FETCHING,
    HTTP_ACCOUNT_FAILED,
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,  
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_ACCOUNT_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_ACCOUNT_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      case HTTP_ACCOUNT_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      default:
        return state;
    }
  };
  