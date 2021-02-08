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
                            <NavLink to="/search-movie">Фильмы</NavLink>
                            <ul>
                                <li><NavLink to="/search-movie">Поиск</NavLink></li>
                                <li><NavLink to="/popular-movie">Популярные фильмы</NavLink></li>
                                <li><NavLink to="/top-movie">Топ 250</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/search-tv">Сериалы</NavLink>
                            <ul>
                                <li><NavLink to="/search-tv">Поиск</NavLink></li>
                                <li><NavLink to="/popular-tv">Популярные сериалы</NavLink></li>
                                <li><NavLink to="/top-tv">Топ 250</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/login"></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;