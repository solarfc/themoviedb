const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const GET_LIST = 'GET_LIST';
const GET_POPULAR_LIST = 'GET_POPULAR_LIST';
const GET_TOP_LIST = 'GET_TOP_LIST';

export const toggleIsLoading = (loading) => {
    return {
        type: TOGGLE_IS_LOADING,
        payload: loading
    }
}

export const getList = (data) => {
    return {
        type: GET_LIST,
        payload: data
    }
}

export const getPopularList = (data) => {
    console.log(data);
    return {
        type: GET_POPULAR_LIST,
        payload: data
    }
}

export const getTopList = (data) => {
    return {
        type: GET_TOP_LIST,
        payload: data
    }
}