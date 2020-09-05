export const FETCH_MAIN_DASHBOARD_REQUEST = 'FETCH_MAIN_DASHBOARD_REQUEST'
export const FETCH_MAIN_DASHBOARD_SUCCESS = 'FETCH_MAIN_DASHBOARD_SUCCESS'
export const FETCH_MAIN_DASHBOARD_FAILURE = 'FETCH_MAIN_DASHBOARD_FAILURE'

const initialState = {
    loading:false,
    main:[],
    error:""
}



export const mainDashboardReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_MAIN_DASHBOARD_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_MAIN_DASHBOARD_SUCCESS:
            
            return {
                
                loading:false,
                mainDashboard:action.payload,
                error:""

            }
        case FETCH_MAIN_DASHBOARD_FAILURE:
            return {
                loading:false,
                mainDashboard:[],
                error:action.payload
            }            
        default: return state
    }

}