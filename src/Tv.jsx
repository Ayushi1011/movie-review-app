import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";
import Home from "./Home";

function Tv() {
  const { tv } = useContext(AppContext);
  return (
    <>
      <div className="heading">
        <Home page="header" />
      </div>
      <div className="movieTv-grid">
        {tv?.map((data) => (
          <Link
            to={`/TvShows/TvShowDetail/${data.id}`}
            key={data.id}
            className="movieTv-card"
          >
            <img
              key={data.id}
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt={data.name || "TV show poster"}
              className="movieTv-poster"
            />
            <h2 className="movieTv-title">{data.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Tv;
