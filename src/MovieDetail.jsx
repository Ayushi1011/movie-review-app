import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./context";
import { useContext } from "react";

function MovieDetail() {
  const { id } = useParams();
  const { movie } = useContext(AppContext);
  const navigate = useNavigate();

  const movieDetail = movie?.find((show) => show.id === parseInt(id));
  if (!movieDetail) return <p>Movie Details not found</p>;
  return (
    <>
      <button onClick={() => navigate("/Movies")}>Back</button>
      <div className="detail-container">
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.name}
            className="image-area"
          />
        </div>
        <div className="details-container">
          <h1>{movieDetail.name}</h1>
          <p>{movieDetail.overview}</p>
          <p>First Air Date: {movieDetail.release_date}</p>
          <p>Rating: {movieDetail.vote_average}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
