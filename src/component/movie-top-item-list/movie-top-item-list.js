import React, {Component} from "react";
import {connect} from "react-redux";
import Spinner from "../spinner";
import {NavLink} from "react-router-dom";
import {getTopMovieTC} from "../../reducers/top-movie-reducer";
import Paginator from "../paginator";

const MovieTopItemList = ({data}) => {
    const content = data.map(item => {
        const {id, poster_path, original_title, release_date, vote_average} = item;
        const img = poster_path === null ? `https://lh3.googleusercontent.com/proxy/5LThuqCdMyL3pZ5lmS8b1p93D0Yp8RRurhQ3nq5IlZRV7Uz0LF-YWpnsTxhWEpYbzqqKqnCQur7P-THiXpRmbEMC681ytrwPwnAHaDwWPQcVc2i6mHM1ZY_1mPybNgZfwQ` :  `https://image.tmdb.org/t/p/w500/${poster_path}`
        return (
            <div className="content__item" key={id}>
                <img src={img} alt=""/>
                <h6>{item.title}</h6>
                <div className="content__item-block">
                    <h6>Оригинальное название: <span>{original_title}</span></h6>
                    <p className="date">Дата премьеры: <span>{release_date}</span></p>
                    <p className="rating">Рейтинг: <span>{vote_average}</span></p>
                    <NavLink to={`movie/${id}`}>Подробнее</NavLink>
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

class MovieTopItemListContainer extends Component {

    componentDidMount() {
        this.props.getTopMovieTC(1);
    }

    render() {
        const {movie: {total_pages, page, data, loading}, getTopMovieTC} = this.props;

        if(loading) {
            return <Spinner />
        }

        return (
            <>
                <Paginator total_pages={total_pages} page={page} action={getTopMovieTC}/>
                <MovieTopItemList data={data}/>
                <Paginator total_pages={total_pages} page={page} action={getTopMovieTC}/>
            </>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.top_movie
    }
}

export default connect(mapStateToProps, {getTopMovieTC})(MovieTopItemListContainer);