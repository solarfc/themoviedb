import React, {Component} from "react";
import {connect} from "react-redux";
import {getTopMovieTC} from "../../reducers/movie-reducer";
import Spinner from "../spinner";
import Pagination from "react-js-pagination";
import {NavLink} from "react-router-dom";

const MovieTopItemList = ({data}) => {
    const content = data.map(item => {
        return (
            <div key={item.id}>
                <h6>{item.title}</h6>
                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt=""/>
                <NavLink to={`/popular/${item.id}`}>Подробнее</NavLink>
            </div>
        )
    });
    return (
        content
    )
}

class MovieTopItemListContainer extends Component {

    handlePageChange(pageNumber) {
        this.props.getTopMovieTC(pageNumber);
    }

    componentDidMount() {
        this.props.getTopMovieTC(1);
    }

    render() {
        const {movie: {total_pages, page, data, loading}} = this.props;

        if(loading) {
            return <Spinner />
        }

        return (
            <>
                <Pagination pageRangeDisplayed={10}
                            activePage={page}
                            itemsCountPerPage={10}
                            totalItemsCount={total_pages}
                            onChange={this.handlePageChange.bind(this)} />
                <MovieTopItemList data={data}/>
            </>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, {getTopMovieTC})(MovieTopItemListContainer);