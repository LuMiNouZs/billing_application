import {
    HTTP_CDR_SUCCESS,
    HTTP_CDR_FETCHING,
    HTTP_CDR_FAILED,
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,  
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case HTTP_CDR_SUCCESS:        
        return { ...state, result: payload, isFetching: false, isError: false };
      case HTTP_CDR_FAILED:
        return { ...state, result: null, isFetching: false, isError: true };
      case HTTP_CDR_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      default:
        return state;
    }
  };
