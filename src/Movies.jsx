import React, { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";
import Home from "./Home";

function Movies() {
  const { movie } = useContext(AppContext);

  return (
    <>
      <div className="heading">
        <Home page="header" />
      </div>
      <div className="movieTv-grid">
        {movie?.map((data) => (
          <Link
            to={`/Movies/MovieDetail/${data.id}`}
            key={data.id}
            className="movieTv-card"
          >
            <img
              key={data.id}
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt={data.title || "movie poster"}
              className="movieTv-poster"
            />
            <h2 className="movieTv-title">{data.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Movies;
