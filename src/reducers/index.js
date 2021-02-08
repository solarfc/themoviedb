import {combineReducers} from "redux";
import movieReducer from "./movie-reducer";
import popularMovieReducer from "./popular-movie-reducer";
import topMovieReducer from "./top-movie-reducer";
import tvReducer from "./tv-reducer";
import popularTVReducer from "./popular-tv-reducer";
import topTVReducer from "./top-tv-reducer";
import movieDetailReducer from "./movie-detail-reducer";

const reducer = combineReducers({
    movie: movieReducer,
    popular_movie: popularMovieReducer,
    top_movie: topMovieReducer,
    tv: tvReducer,
    popular_tv: popularTVReducer,
    top_tv: topTVReducer,
    movie_detail: movieDetailReducer
});

export default reducer;