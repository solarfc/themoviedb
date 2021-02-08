import {dispatchState, getTVPopularList, toggleIsLoading, updateState} from "../actions/actions";
import {tvApi} from "../services/services";

const initialState = {
    loading: false,
    data: [],
    total_pages: null,
    page: 1
}

// export const getPopularTVTC = (page) => async (dispatch) => {
//     dispatch(toggleIsLoading(true));
//     let data = await tvApi.getPopularTVList(page);
//     if(data.status === 200) {
//         dispatch(getTVPopularList(data.data));
//         setTimeout(() => {
//             dispatch(toggleIsLoading(false));
//         }, 1500);
//     }
// };

export const getPopularTVTC = (page) => async (dispatch) => {
    await dispatchState(page, dispatch, tvApi.getPopularTVList, getTVPopularList);
};

const popularTVReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload};
        case 'tv/GET_TV_POPULAR_LIST':
            return updateState(state, action.payload);
        default:
            return state;
    }
}

export default popularTVReducer;