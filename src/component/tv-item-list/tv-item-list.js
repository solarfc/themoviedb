import React, {Component} from "react";
import {connect} from "react-redux";
import {getTVTC} from "../../reducers/tv-reducer";
import Form from "../form";
import Paginator from "../paginator";
import Spinner from "../spinner";
import {NavLink} from "react-router-dom";

const TVListItem = ({data}) => {
    const content = data.map(item => {
        const {id, name, poster_path, original_name, release_date, vote_average} = item;
        const img = poster_path === null ? `https://lh3.googleusercontent.com/proxy/5LThuqCdMyL3pZ5lmS8b1p93D0Yp8RRurhQ3nq5IlZRV7Uz0LF-YWpnsTxhWEpYbzqqKqnCQur7P-THiXpRmbEMC681ytrwPwnAHaDwWPQcVc2i6mHM1ZY_1mPybNgZfwQ` :  `https://image.tmdb.org/t/p/w500/${poster_path}`
        return (
            <div className="content__item" key={id}>
                <img src={img} alt=""/>
                <h6>{name}</h6>
                <div className="content__item-block">
                    <h6>Оригинальное название: <span>{original_name}</span></h6>
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
};

class TVListContainer extends Component {

    state = {
        title: ''
    }

    searchTV = (e) => {
        e.preventDefault();
        this.setState({title: e.target.value});
        this.props.getTVTC(this.props.tv.page, e.target.value);
    }

    render() {
        const {tv: {loading, data, total_pages, page}, getTVTC} = this.props;
        const {title} = this.state;
        console.log(title);
        const pag = total_pages > 1 ? <Paginator title={title} total_pages={total_pages} page={page} action={getTVTC}/> : null;
        const content = (loading && title.length !== 0) ? <Spinner /> : <>
            {pag}
            <TVListItem data={data}/>
            {pag}
        </>
        return (
            <>
                <Form action={this.searchTV} title={title} name="сериала"/>
                {content}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tv: state.tv
    }
}

export default connect(mapStateToProps, {getTVTC})(TVListContainer);