import React from "react";
import ReactDOM from "react-dom";
import "../../../css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul className="nav align-right">
        <li className="nav-item">
          <Link to={"/upcoming/"} className="nav-link">
            Search Upcoming Movies
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
