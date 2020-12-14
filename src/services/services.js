import * as axios from "axios";

const key = '00b43c1d9471d2db8019f416813a640c';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
});

export const movieApi = {
    getMovieList(movie, page = 1) {
        return instance.get(`/search/movie/?api_key=${key}&query=${movie}&page=${page}&language=ru-RU`)
            .then(res => res);
    },
    getPopularMovieList(page = 1) {
        return instance.get(`movie/popular/?api_key=${key}&page=${page}&language=ru-RU`)
            .then(res => res);
    },
    getTopMovieList(page = 1) {
        return instance.get(`movie/top_rated/?api_key=${key}&page=${page}&language=ru-RU`)
            .then(res => res);
    }
};