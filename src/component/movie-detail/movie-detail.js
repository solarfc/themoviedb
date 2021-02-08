import "./movie-detail.scss"
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Spinner from "../spinner";
import {getMovieDetailTC} from "../../reducers/movie-detail-reducer";
import poster from "../../assets/img/unnamed.jpg"

// const MovieDetail = ({data, results}) => {
//     console.log(data);
//     const {backdrop_path, genres, original_language, original_title, overview, poster_path, production_companies, production_countries, release_date, runtime, spoken_languages, status, title, video, vote_average} = data;
//     const genrez = genres !== undefined ? genres.map(item => {
//         return <span key={item.id}>{item.name}, </span>
//     }) : null;
//     const img = poster_path !== null ? `https://image.tmdb.org/t/p/w500/${poster_path}` : poster;
//
//     return (
//         <div className="detail">
//             <div className="detail__top">
//                 <div className="detail__top-img">
//                     <img src={img} alt=""/>
//                 </div>
//                 <div className="detail__top-info">
//                     <h2>{title} </h2>
//                     <p>Дата резила: {release_date.split('-').reverse().join('.')}</p>
//                     <p>Продолжительность: {(runtime / 60).toString().slice(0, (runtime / 60).toString().indexOf('.'))}:{runtime % 60}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


class MovieDetails extends Component {

    componentDidMount() {
        // this.props.getMovieDetailTC(this.props.match.params.id);
    }

    render() {
        console.log(this.props.detail.loading);
        console.log(this.props.match.params.id);

        // const {detail: {loading, data, video: {results}}} = this.props;

        // if(loading && !data) {
        //     return <Spinner />
        // }

        return (
            <></>
            // <MovieDetail data={data} results={results}/>
        );
    }
}

const WithDataMovieDetail = withRouter(MovieDetails);

const mapStateToProps = (state) => {
    return {
        detail: state.movie_detail
    }
}

const MovieDetailContainer =  compose(connect(mapStateToProps, {getMovieDetailTC}))(WithDataMovieDetail);

export default MovieDetailContainer;