import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Home({ page }) {
  return (
    <div className={page === "header" ? "" : "home-background"}>
      <header className={page === "header" ? "" : "App-header"}>
        <div className={page === "header" ? "" : "content-wrapper"}>
          {page !== "header" && (
            <React.Fragment>
              <h1>Welcome to Movie World!</h1>
              <p>Explore your favorite movies and TV shows.</p>
            </React.Fragment>
          )}
          <div className={page === "header" ? "header-container" : ""}>
            <button className="btn btn-primary">
              <Link to="/Movies">Movies</Link>
            </button>
            <button className="btn btn-secondary">
              <Link to="/TvShows">Tv Shows</Link>
            </button>
            <Search />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
