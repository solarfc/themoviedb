import React, {Component} from "react";
import {useFormik} from "formik";
import {getMovieTC} from "../../reducers/movie-reducer";
import {connect} from "react-redux";

const Search = ({getMovieTC}) => {

    const formik = useFormik({
        initialValues: {
            movie: ''
        },
        onSubmit: values => {
            getMovieTC(values.movie);
        }
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="movie"
                name="movie"
                type="movie"
                onChange={formik.handleChange}
                value={formik.values.movie}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

const ItemList = ({data}) => {
    const content = data.map(item => {
        const img = item.backdrop_path !== null ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : `https://lh3.googleusercontent.com/proxy/PcGS1m_0qKZjdJ-LHpIYawHuQ-MK2lkl_AEd62IpFkFeI_9PzeWtbtlNT4ol2Rj1p5n8ZarygWj-J-kau8BfQPqA3b4RYhdJEeM`;

        return <div key={item.id}>
            <h6>{item.title}</h6>
            <img src={img} alt=""/>
        </div>
    });
    return content
}

class SearchContainer extends Component {

    render() {
        const {movie: {total_pages, page, data, loading}, getMovieTC} = this.props;

        return (
            <>
                <Search getMovieTC={getMovieTC} total_pages={total_pages} page={page}/>
                <ItemList data={data}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, {getMovieTC})(SearchContainer);