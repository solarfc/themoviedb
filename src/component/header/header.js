import "./header.scss";
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li>
                            <NavLink to="/">Фильмы</NavLink>
                            <ul>
                                <li><NavLink to="/search-movie">Поиск</NavLink></li>
                                <li><NavLink to="/popular-movie">Популярные фильмы</NavLink></li>
                                <li><NavLink to="/top-movie">Топ 250</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/">Сериалы</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;