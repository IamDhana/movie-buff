import React from "react";
import ReactDOM from "react-dom";
import "../../../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class SearchMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      input: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    this.props.history.push("/" + this.state.input);
  }

  componentDidMount() {
    if (this.props.match.params.keyWord) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=386bde4cfcd4c696ee4852f54c05bdd9&language=en-US&query=" +
            this.props.match.params.keyWord +
            "&page=1&include_adult=false"
        )
        .then(res => {
          const movies = res.data.results;
          this.setState({
            movies: movies,
            input: this.props.match.params.keyWord
          });
        });
    }
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
          <div className="col-md-12 my-4 ">
            <input
              type="text"
              className="form-control my-2"
              placeholder="Search for a movie"
              autoComplete="off"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <div className="text-center">
              <input
                type="button"
                onClick={this.handleClick}
                className="btn btn-primary mb-2 text-center"
                value="Submit"
              />
            </div>
          </div>
          <ul className="nav align-right">
            <li className="nav-item">
              <Link to="/upcoming" className="nav-link">
                See Upcoming Movies
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

export default withRouter(SearchMovieList);
