import {FETCH_DETAIL_DASHBOARD_REQUEST, FETCH_DETAIL_DASHBOARD_SUCCESS, FETCH_DETAIL_DASHBOARD_FAILURE} from './DetailDashboardType';

const initialState = {
    loading:false,
    main:[],
    error:""
}



export const detailDashboardReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_DETAIL_DASHBOARD_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_DETAIL_DASHBOARD_SUCCESS:
            
            return {
                
                loading:false,
                detailDashboard:action.payload,
                error:""

            }
        case FETCH_DETAIL_DASHBOARD_FAILURE:
            return {
                loading:false,
                detailDashboard:[],
                error:action.payload
            }            
        default: return state
    }

}