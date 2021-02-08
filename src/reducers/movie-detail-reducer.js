import {getMovieDetail, getMovieVideo, toggleIsLoading} from "../actions/actions";
import {movieApi} from "../services/services";

const initialState = {
    loading: true,
    data: null,
    // video: {}
}

export const getMovieDetailTC = (id) => async (dispatch) => {
    dispatch(toggleIsLoading(true));
    let data = await movieApi.getMovieDetail(id);
    // let video = await movieApi.getMovieVideo(id);
    // if(video.status === 200) {
    //     dispatch(getMovieVideo(video.data));
    // }
    // if(data.status === 200) {
    //     dispatch(getMovieDetail(data.data));
    //     setTimeout(() => {
    //         dispatch(toggleIsLoading(false));
    //     }, 1500);
    // }
}

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, loading: action.payload};
        case 'movie/GET_MOVIE_DETAIL':
            return {...state, data: action.payload}
        case 'movie/GET_MOVIE_VIDEO':
            return {...state, video: action.payload}
        default:
            return state;
    }
}

export default movieDetailReducer;