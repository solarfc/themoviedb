import React from "react";
import Header from "../header";
import {Route, Switch} from "react-router-dom";
import MoviePopularListContainer from "../movie-popular-item-list";
import MovieTopItemListContainer from "../movie-top-item-list/movie-top-item-list";
import SearchContainer from "../search/search";

const App = () => {
    return (
        <>
            <Header />
            <main role="main">
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => {return <h1>Welcome To The Movie DB</h1>}}></Route>
                        <Route path="/search-movie" render={() => <SearchContainer />}></Route>
                        <Route path="/popular-movie" render={() => <MoviePopularListContainer />}></Route>
                        <Route path="/top-movie" render={() => <MovieTopItemListContainer />}></Route>
                    </Switch>
                </div>
            </main>
        </>
    )
}

export default App;