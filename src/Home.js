import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-background">
      <header className="App-header">
        <div className="content-wrapper">
          <h1>Welcome to Movie World!</h1>
          <p>Explore your favorite movies and TV shows.</p>
          <button className="btn btn-primary">
            <Link to="/Movies">Movies</Link>
          </button>
          <button className="btn btn-secondary">
            <Link to="/TvShows">Tv Shows</Link>
          </button>
          <Search />
        </div>
      </header>
    </div>
  );
}

export default Home;
