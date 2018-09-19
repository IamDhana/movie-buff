import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./js/app";
import UpcomingMovieList from "./js/containers/movie_list/movie_list";
import MovieDetail from "./js/containers/movie_detail/movie_detail";
import SearchMovieList from "./js/containers/search_movie_list/search_movie_list";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={SearchMovieList} />
      <Route path="/detail/:movieId" component={MovieDetail} />
      <Route path="/upcoming" component={UpcomingMovieList} />
      <Route path="/:keyWord" component={UpcomingMovieList} />
    </div>
  </Router>,
  document.getElementById("root")
);
