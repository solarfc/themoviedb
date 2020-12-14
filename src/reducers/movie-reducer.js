import {movieApi} from "../services/services";
import {getList, getPopularList, getTopList, toggleIsLoading} from "../actions/actions";

const initialState = {
    loading: true,
    total_pages: null,
    data: [],
    page: 1
};

const updateState = (state, payload) => {
    const {page, results, total_pages } = payload;
    return {...state, data: results, total_pages: total_pages, page: page}
}

export const getMovieTC = (movie, page) => async (dispatch) => {
    let data = await movieApi.getMovieList(movie, page);
    if(data.status === 200) {
        dispatch(getList(data.data));
    }
}

export const getPopularMovieTC = (page) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await movieApi.getPopularMovieList(page);
    if(data.status === 200) {
        dispatch(getPopularList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false))
        }, 1000);
    }
};

export const getTopMovieTC = (page) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await movieApi.getTopMovieList(page);
    if(data.status === 200) {
        dispatch(getTopList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false));
        }, 1000);
    }
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload}
        case 'GET_LIST':
            return updateState(state, action.payload);
        case 'GET_POPULAR_LIST':
            return updateState(state, action.payload);
        case 'GET_TOP_LIST':
            return updateState(state, action.payload);
        default:
            return state;
    }
};

export default movieReducer;