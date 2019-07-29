import {httpClient} from "./../utils/HttpClient";
import {
    HTTP_CDR_SUCCESS,
    HTTP_CDR_FETCHING,
    HTTP_CDR_FAILED,
    server
  } from "../constants";

export const setStateCdrToFetching = () => ({
    type: HTTP_CDR_FETCHING
})

export const setStateCdrToSuccess = (payload) => ({
    type: HTTP_CDR_SUCCESS,
    payload
})

export const setStateCdrToFailed = () => ({
    type: HTTP_CDR_FAILED
})

export const getCdrByDate = (dateStart, dateEnd) =>{
  return dispatch => {
    dispatch(setStateCdrToFetching())
    httpClient.get(`${server.CDR_PER_MONTH_URL}`).then(result =>{
      dispatch(setStateCdrToSuccess(result.data.data))
    })
  }
}

export const getCdrByCDRsPerMonth = (year,month,type) => {  
    return dispatch => {
      //dispatch(finishInitialization(false))
      dispatch(setStateCdrToFetching())
      httpClient
      .get(`${server.CDR_PER_MONTH_URL}/year/${year}/month/${month}/type/${type}`)
      .then(result => {
        dispatch(setStateCdrToSuccess(result.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setStateCdrToFailed());
      });
    };
  };

export const getCdr =(data)=>{
    return dispatch=>{
        dispatch(setStateCdrToFetching())
        httpClient.get(server.CDR_PER_MONTH_URL).then(result =>{
            dispatch(setStateCdrToSuccess(result.data))

        }).catch(err=>{
            dispatch(setStateCdrToFailed())
        })
    }
}

