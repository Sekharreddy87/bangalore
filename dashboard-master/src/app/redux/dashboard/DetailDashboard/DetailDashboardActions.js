import {FETCH_DETAIL_DASHBOARD_REQUEST, FETCH_DETAIL_DASHBOARD_SUCCESS, FETCH_DETAIL_DASHBOARD_FAILURE} from './DetailDashboardType';
import axios from 'axios';
import {urlConfig} from '../../UrlConfig';




export const fetchDetailDashboardRequest = () => {
    return{
        type:FETCH_DETAIL_DASHBOARD_REQUEST
    }
}



export const fetchDetailDashboardSuccess = main => {

    return{
        type:FETCH_DETAIL_DASHBOARD_SUCCESS,
        payload: main
    }
}


export const fetchDetailDashboardFailure = error => {
    return{
        type:FETCH_DETAIL_DASHBOARD_FAILURE,
        payload: error
    }
}




export function fetchDetailDashboard() {
        
    return function(dispatch) {
        const formData = new FormData();
        formData.append('time', new Date());
        
        let options = {
                method:'POST',
                url:urlConfig.MAIN_DASHBOARD.URL,
                data:formData,
                headers:{
                  'Accept':'application/json', 
                  'Content-Type': 'multipart/form-data',      
                }
            }
        dispatch(dispatch(fetchDetailDashboardRequest))
        axios(options)
        .then(respons =>{
            const data = respons.data
            setTimeout(() => {
            dispatch(fetchDetailDashboardSuccess(data))
        }, urlConfig.MAIN_DASHBOARD.LOADING)             
        })
        .catch( error =>{
            const errorMsg = error.message
            dispatch(fetchDetailDashboardFailure(errorMsg))
        })
    }
}