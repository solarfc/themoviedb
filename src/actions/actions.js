import {tvApi} from "../services/services";

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const GET_MOVIE_LIST = 'movie/GET_MOVIE_LIST';
const GET_MOVIE_POPULAR_LIST = 'movie/GET_MOVIE_POPULAR_LIST';
const GET_MOVIE_TOP_LIST = 'movie/GET_MOVIE_TOP_LIST';
const GET_TV_LIST = 'tv/GET_TV_LIST';
const GET_TV_POPULAR_LIST = 'tv/GET_TV_POPULAR_LIST';
const GET_TV_TOP_LIST = 'tv/GET_TV_TOP_LIST';
const GET_MOVIE_DETAIL = 'movie/GET_MOVIE_DETAIL';
const GET_MOVIE_VIDEO = 'movie/GET_MOVIE_VIDEO';

export const toggleIsLoading = (loading) => {
    return {
        type: TOGGLE_IS_LOADING,
        payload: loading
    }
};

export const getMovieList = (data) => {
    return {
        type: GET_MOVIE_LIST,
        payload: data
    }
};

export const getMoviePopularList = (data) => {
    return {
        type: GET_MOVIE_POPULAR_LIST,
        payload: data
    }
};

export const getMovieTopList = (data) => {
    return {
        type: GET_MOVIE_TOP_LIST,
        payload: data
    }
};

export const getMovieDetail = (data) => {
    return {
        type: GET_MOVIE_DETAIL,
        payload: data
    }
};

export const getMovieVideo = (video) => {
    return {
        type: GET_MOVIE_VIDEO,
        payload: video
    }
};

export const getTVList = (data) => {
    return {
        type: GET_TV_LIST,
        payload: data
    }
};

export const getTVPopularList = (data) => {
    return {
        type: GET_TV_POPULAR_LIST,
        payload: data
    }
};

export const getTVTopList = (data) => {
    return {
        type: GET_TV_TOP_LIST,
        payload: data
    }
}

export const updateState = (state, payload) => {
    const {page, results, total_pages } = payload;
    return {...state, data: results, total_pages: total_pages, page: page}
};

export const dispatchState = async (page, dispatch, api, action) => {
    dispatch(toggleIsLoading(true));
    let data = await api(page);
    if(data.status === 200) {
        dispatch(action(data.data));
        setTimeout(() => {
            dispatch(toggleIsLoading(false));
        }, 1500);
    }
};