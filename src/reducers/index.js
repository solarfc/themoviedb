import {combineReducers} from "redux";
import movieReducer from "./movie-reducer";
import popularMovieReducer from "./popular-movie-reducer";
import topMovieReducer from "./top-movie-reducer";
import tvReducer from "./tv-reducer";

const reducer = combineReducers({
    movie: movieReducer,
    popular_movie: popularMovieReducer,
    top_movie: topMovieReducer,
    tv: tvReducer
});

export default reducer;