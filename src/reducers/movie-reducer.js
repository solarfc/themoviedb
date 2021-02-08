import {movieApi} from "../services/services";
import {getMovieList, toggleIsLoading, updateState} from "../actions/actions";

const initialState = {
    loading: false,
    data: [],
    total_pages: null,
    page: 1,
    error: false
};

export const getMovieTC = (page, movie) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await movieApi.getMovieList(page, movie);
    if(data.status === 200) {
        dispatch(getMovieList(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false))
        }, 1000);
    } else {
        console.log(`error: ${data}`);
    }
}


const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload};
        case 'movie/GET_MOVIE_LIST':
            return updateState(state, action.payload);
        default:
            return state;
    }
};

export default movieReducer;