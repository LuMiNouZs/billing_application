import {
    HTTP_BILLING_SUCCESS,
    HTTP_BILLING_FETCHING,
    HTTP_BILLING_FAILED,
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,  
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_BILLING_SUCCESS:        
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_BILLING_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      case HTTP_BILLING_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      default:
        return state;
    }
  };
