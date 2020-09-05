export const FETCH_SECOND_DASHBOARD_REQUEST = 'FETCH_SECOND_DASHBOARD_REQUEST';
export const FETCH_SECOND_DASHBOARD_SUCCESS = 'FETCH_SECOND_DASHBOARD_SUCCESS';
export const FETCH_SECOND_DASHBOARD_FAILURE = 'FETCH_SECOND_DASHBOARD_FAILURE';

const initialState = {
    loading:false,
    main:[],
    error:""
}



export const secondDashboardReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_SECOND_DASHBOARD_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_SECOND_DASHBOARD_SUCCESS:
            
            return {
                
                loading:false,
                secondDashboard:action.payload,
                error:""

            }
        case FETCH_SECOND_DASHBOARD_FAILURE:
            return {
                loading:false,
                secondDashboard:[],
                error:action.payload
            }            
        default: return state
    }

}