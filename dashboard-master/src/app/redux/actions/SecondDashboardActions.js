import axios from 'axios';
export const FETCH_SECOND_DASHBOARD_REQUEST = 'FETCH_SECOND_DASHBOARD_REQUEST'
export const FETCH_SECOND_DASHBOARD_SUCCESS = 'FETCH_SECOND_DASHBOARD_SUCCESS'
export const FETCH_SECOND_DASHBOARD_FAILURE = 'FETCH_SECOND_DASHBOARD_FAILURE'




export const fetchSecondDashboardRequest = () => {
    return{
        type:FETCH_SECOND_DASHBOARD_REQUEST
    }
}



export const fetchSecondDashboardSuccess = second => {

    return{
        type:FETCH_SECOND_DASHBOARD_SUCCESS,
        payload: second
    }
}


export const fetchSecondDashboardFailure = error => {
    return{
        type:FETCH_SECOND_DASHBOARD_FAILURE,
        payload: error
    }
}


export function fetchSecondDashboard(courseId) {
    const formData = new FormData();
  
    formData.append('course_id',courseId);
    let options = {
        method:'POST',
        url:'http://niranjan-sia.herokuapp.com/api/v1/utility/second_dashboard',
        data:formData,
        headers:{
          'Accept':'application/json', 
          'Content-Type': 'multipart/form-data',
        }
}
    return function(dispatch) {

        dispatch(dispatch(fetchSecondDashboardRequest))
        axios(options)
        .then(respons =>{
            const data = respons.data
            dispatch(fetchSecondDashboardSuccess(data))          
        })
        .catch( error =>{
            const errorMsg = error.message
            dispatch(fetchSecondDashboardFailure(errorMsg))
        })
    }
}