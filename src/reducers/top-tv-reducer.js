import {getTVTopList, toggleIsLoading, updateState} from "../actions/actions";
import {tvApi} from "../services/services";

const initialState = {
    loading: false,
    data: [],
    total_pages: null,
    page: 1
};

export const getTopTVTC = (page) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await tvApi.getTopTVList(page);
    if(data.status === 200) {
        dispatch(getTVTopList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false));
        }, 1500);
    }
};

const topTVReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload};
        case 'tv/GET_TV_TOP_LIST':
            return updateState(state, action.payload)
        default:
            return state;
    }
};

export default topTVReducer;