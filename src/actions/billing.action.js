import {httpClient} from "./../utils/HttpClient";
import {
    HTTP_BILLING_SUCCESS,
    HTTP_BILLING_FETCHING,
    HTTP_BILLING_FAILED,
    server
  } from "../constants";

export const setStateBillingToFetching = () => ({
    type: HTTP_BILLING_FETCHING
})

export const setStateBillingToSuccess = (payload) => ({
    type: HTTP_BILLING_SUCCESS,
    payload
})

export const setStateBillingToFailed = () => ({
    type: HTTP_BILLING_FAILED
})


export const getBillingByCDRsPerMonth = (year,month,type) => {  
    return dispatch => {
      //dispatch(finishInitialization(false))
      dispatch(setStateBillingToFetching())
      httpClient
      .get(`${server.CDR_PER_MONTH_URL}/year/${year}/month/${month}/type/${type}`)
      .then(result => {
        dispatch(setStateBillingToSuccess(result.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setStateBillingToFailed());
      });
    };
  };

export const getBilling =(data)=>{
    return dispatch=>{
        dispatch(setStateBillingToFetching())
        httpClient.get(server.CDR_PER_MONTH_URL).then(result =>{
            dispatch(setStateBillingToSuccess(result.data))

        }).catch(err=>{
            dispatch(setStateBillingToFailed())
        })
    }
}

