import React from "react";
import ReactDOM from "react-dom";
import "../../../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: "",
      rating: "",
      releaseDate: "",
      movieName: "",
      movieDescription: "",
      imageUrl: ""
    };
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=386bde4cfcd4c696ee4852f54c05bdd9&language=en-US"
      )
      .then(res => {
        const movie = res.data;
        console.log;
        this.setState({
          itemId: movie.id,
          rating: movie.vote_average,
          releaseDate: movie.release_date,
          movieName: movie.title,
          movieDescription: movie.overview,
          imageUrl: "https://image.tmdb.org/t/p/original" + movie.poster_path
        });
      });
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav align-right">
                <p className="nav-item">
                  <Link to="/" className="nav-link">
                    Search Movies
                  </Link>
                </p>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="movie-thumbnail">
                <img src={this.state.imageUrl} alt="" />
              </div>
            </div>
            <div className="col-md-9">
              <h2>{this.state.movieName}</h2>
              <p>Rating: {this.state.rating}</p>
              <p>Release Date: {this.state.releaseDate}</p>
              <div className="movie-description">
                <h4>Overview</h4>
                <p>{this.state.movieDescription}</p>
              </div>
              <Link to="/" className="card-link">
                Go to movie list
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
