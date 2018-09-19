import React from "react";
import ReactDOM from "react-dom";
import "../../../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/nav_bar/nav_bar";

class UpcomingMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=386bde4cfcd4c696ee4852f54c05bdd9&language=en-US`
      )
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
      });
  }

  render() {
    var moviesList = [];
    for (var i = 0; i <= this.state.movies.length - 1; i++) {
      let item = this.state.movies[i];
      let index = i;
      moviesList.push(
        <div className="col-md-4" key={item.id}>
          <div className="card my-4">
            <div>
              <img
                className="card-img-top"
                src={"https://image.tmdb.org/t/p/original/" + item.poster_path}
                alt=""
                height="200"
              />
            </div>
            <div className="card-body">
              <p className="card-title">{item.title}</p>
              <p className="card-subtitle mb-2 text-muted">
                {item.release_date}
              </p>
              <p className="card-text">
                User Rating:
                {item.vote_average}
              </p>
            </div>
            <div className="card-footer text-muted text-center">
              <Link to={"/detail/" + item.id} className="card-link">
                Detail
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="album py-5">
        <div className="container">
          <ul className="nav align-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Search Movies
              </Link>
            </li>
          </ul>
          <h4>Movies</h4>
          <div className="row">{moviesList}</div>
        </div>
      </div>
    );
  }
}

export default UpcomingMovieList;
