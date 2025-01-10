import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";

function Tv() {
  const { tv } = useContext(AppContext);
  return (
    <>
      {tv?.map((data) => (
        <Link to={`/TvShows/TvShowDetail/${data.id}`} key={data.id}>
          <img
            key={data.id}
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={data.name || "TV show poster"}
          />
          <h2>{data.name}</h2>
        </Link>
      ))}
    </>
  );
}

export default Tv;
