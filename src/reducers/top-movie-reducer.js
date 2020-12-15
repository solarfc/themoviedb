import {getMovieTopList, toggleIsLoading, updateState} from "../actions/actions";
import {movieApi} from "../services/services";

const initialState = {
    loading: true,
    data: [],
    total_pages: null,
    page: 1
};

export const getTopMovieTC = (page) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await movieApi.getTopMovieList(page);
    if(data.status === 200) {
        dispatch(getMovieTopList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false));
        }, 1000);
    }
}

const topMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload}
        case 'movie/GET_MOVIE_TOP_LIST':
            return updateState(state, action.payload);
        default:
            return state;
    }
};

export default topMovieReducer;