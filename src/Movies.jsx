import React, { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";
import Home from "./Home";

function Movies() {
  const { movie } = useContext(AppContext);

  return (
    <>
      {movie?.map((data) => (
        <Link to={`/Movies/MovieDetail/${data.id}`} key={data.id}>
          <img
            key={data.id}
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={data.title || "movie poster"}
          />
          <h2>{data.title}</h2>
        </Link>
      ))}
    </>
  );
}

export default Movies;
