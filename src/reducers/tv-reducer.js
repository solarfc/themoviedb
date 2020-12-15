import {getTVList, toggleIsLoading, updateState} from "../actions/actions";
import {tvApi} from "../services/services";

const initialState = {
    loading: false,
    data: [],
    page: 1,
    total_pages: null
};

export const getTVTC = (page, tv) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await tvApi.getTVList(page, tv);
    if(data.status === 200) {
        dispatch(getTVList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false));
        }, 1500);
    }
};

const tvReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload};
        case 'tv/GET_TV_LIST':
            return updateState(state, action.payload);
        default:
            return state;
    }
}

export default tvReducer;