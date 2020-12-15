import {getMoviePopularList, toggleIsLoading, updateState} from "../actions/actions";
import {movieApi} from "../services/services";

const initialState = {
    loading: true,
    data: [],
    total_pages: null,
    page: 1
};

export const getPopularMovieTC = (page) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await movieApi.getPopularMovieList(page);
    if(data.status === 200) {
        dispatch(getMoviePopularList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false))
        }, 1500);
    }
};

const popularMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload}
        case 'movie/GET_MOVIE_POPULAR_LIST':
            return updateState(state, action.payload);
        default:
            return state;
    }
};

export default popularMovieReducer;