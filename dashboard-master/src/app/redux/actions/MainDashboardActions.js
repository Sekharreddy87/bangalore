
import axios from 'axios';
export const FETCH_MAIN_DASHBOARD_REQUEST = 'FETCH_MAIN_DASHBOARD_REQUEST'
export const FETCH_MAIN_DASHBOARD_SUCCESS = 'FETCH_MAIN_DASHBOARD_SUCCESS'
export const FETCH_MAIN_DASHBOARD_FAILURE = 'FETCH_MAIN_DASHBOARD_FAILURE'




export const fetchMainDashboardRequest = () => {
    return{
        type:FETCH_MAIN_DASHBOARD_REQUEST
    }
}



export const fetchMainDashboardSuccess = main => {

    return{
        type:FETCH_MAIN_DASHBOARD_SUCCESS,
        payload: main
    }
}


export const fetchMainDashboardFailure = error => {
    return{
        type:FETCH_MAIN_DASHBOARD_FAILURE,
        payload: error
    }
}



export  function fetchMainDashboard() {
        
    return function(dispatch) {
        const formData = new FormData();
        formData.append('time', new Date());
        let options = {
                method:'POST',
                url:'http://niranjan-sia.herokuapp.com/api/v1/utility/main_dashboard',
                data:formData,
                headers:{
                  'Accept':'application/json',
                  'Content-Type': 'multipart/form-data',      
                }
            }
            
        dispatch(dispatch(fetchMainDashboardRequest))
       axios(options)
        .then(respons =>{
            const data = respons.data
                         
            dispatch(fetchMainDashboardSuccess(data))
        })
        .catch( error =>{
            const errorMsg = error.message
            dispatch(fetchMainDashboardFailure(errorMsg))
        })
    }
}