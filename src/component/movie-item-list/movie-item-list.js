import React, {Component} from "react";
import {getMovieTC} from "../../reducers/movie-reducer";
import {connect} from "react-redux";
import Spinner from "../spinner";
import Paginator from "../paginator";
import Form from "../form";
import {NavLink} from "react-router-dom";

const MovieItemList = ({data}) => {
    const content = data.map(item => {
        const {id, title, poster_path, original_title, release_date, vote_average} = item;
        const img = poster_path === null ? `https://lh3.googleusercontent.com/proxy/5LThuqCdMyL3pZ5lmS8b1p93D0Yp8RRurhQ3nq5IlZRV7Uz0LF-YWpnsTxhWEpYbzqqKqnCQur7P-THiXpRmbEMC681ytrwPwnAHaDwWPQcVc2i6mHM1ZY_1mPybNgZfwQ` :  `https://image.tmdb.org/t/p/w500/${poster_path}`
        return (
            <div className="content__item" key={id}>
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

class MovieListContainer extends Component {

    state = {
        title: ''
    }

    searchMovie = (e) => {
        e.preventDefault();
        this.setState({title: e.target.value});
        this.props.getMovieTC(this.props.movie.page, e.target.value);
    }

    render() {
        const {movie: {total_pages, page, data, loading}, getMovieTC} = this.props;
        const {title} = this.state;
        const pag = total_pages > 1 ? <Paginator title={title} total_pages={total_pages} page={page} action={getMovieTC}/> : null;
        const content = (loading && title.length !== 0) ? <Spinner /> : <>
            {pag}
            <MovieItemList data={data} />
            {pag}
        </>

        return (
            <>
                <Form action={this.searchMovie} name="фильма"/>
                {content}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, {getMovieTC})(MovieListContainer);