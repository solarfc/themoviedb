import React, {Component} from "react";
import {connect} from "react-redux";
import Paginator from "../paginator";
import Spinner from "../spinner";
import {NavLink} from "react-router-dom";
import {getPopularMovieTC} from "../../reducers/popular-movie-reducer";

const MoviePopularList = ({data}) => {
    const content = data.map(item => {
        const {id, title, poster_path, original_title, release_date, vote_average} = item;
        const img = poster_path === null ? `https://lh3.googleusercontent.com/proxy/5LThuqCdMyL3pZ5lmS8b1p93D0Yp8RRurhQ3nq5IlZRV7Uz0LF-YWpnsTxhWEpYbzqqKqnCQur7P-THiXpRmbEMC681ytrwPwnAHaDwWPQcVc2i6mHM1ZY_1mPybNgZfwQ` :  `https://image.tmdb.org/t/p/w500/${poster_path}`
        return (
            <div className="content__item" key={id} id={id}>
                <img src={img} alt=""/>
                <h6>{title}</h6>
                <div className="content__item-block">
                    <h6>Оригинальное название: <span>{original_title}</span></h6>
                    <p className="date">Дата премьеры: <span>{release_date}</span></p>
                    <p className="rating">Рейтинг: <span>{vote_average}</span></p>
                    <NavLink to="">Подробнее</NavLink>
                </div>
            </div>
        )
    });
    return (
        <div className="content">
            {content}
        </div>
    )
}

class MoviePopularListContainer extends Component {


    componentDidMount() {
        this.props.getPopularMovieTC(1);
    }

    render() {
        const {movie: {total_pages, page, data, loading}, getPopularMovieTC} = this.props;

        if(loading) {
            return <Spinner />
        }

        return (
            <>
                <Paginator page={page} total_pages={total_pages} action={getPopularMovieTC}/>
                <MoviePopularList data={data}/>
                <Paginator page={page} total_pages={total_pages} action={getPopularMovieTC}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.popular_movie
    }
}

export default connect(mapStateToProps, {getPopularMovieTC})(MoviePopularListContainer);