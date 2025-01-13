import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./context";

function TvShowDetail() {
  const { id } = useParams();
  const { tv } = useContext(AppContext);
  const navigate = useNavigate();

  const tvShowDetail = tv?.find((show) => show.id === parseInt(id));
  if (!tvShowDetail) return <p>TV Show not found</p>;

  return (
    <>
      <button onClick={() => navigate("/TvShows")}>Back</button>
      <div className="detail-container">
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowDetail.poster_path}`}
            alt={tvShowDetail.name}
            className="image-area"
          />
        </div>
        <div className="details-container">
          <h1>{tvShowDetail.name}</h1>
          <p>{tvShowDetail.overview}</p>
          <p>First Air Date: {tvShowDetail.first_air_date}</p>
          <p>Rating: {tvShowDetail.vote_average}</p>
        </div>
      </div>
    </>
  );
}

export default TvShowDetail;
