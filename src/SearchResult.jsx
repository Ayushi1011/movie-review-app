import React, { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";

function SearchResult() {
  const { movie, tv, query } = useContext(AppContext);
  const Common = ({ item }) => {
    return (
      <Link
        to={`/Movies/MovieDetail/${item.id}`}
        key={item.id}
        className="movieTv-card"
      >
        <div key="{movieItem.id}">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
            className="movieTv-poster"
          />
          <h3 className="movieTv-title">{item.title}</h3>
        </div>
      </Link>
    );
  };
  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div>
        <h2>Movies</h2>
        {movie.length === 0 ? (
          <p>No Movies found for "{query}"</p>
        ) : (
          <div className="movieTv-grid">
            {movie &&
              movie.map((movieItem) => (
                <Common item={movieItem} />
                // <Link
                //   to={`/Movies/MovieDetail/${movieItem.id}`}
                //   key={movieItem.id}
                //   className="movieTv-card"
                // >
                //   <div key="{movieItem.id}">
                //     <img
                //       src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
                //       alt={movieItem.title}
                //       className="movieTv-poster"
                //     />
                //     <h3 className="movieTv-title">{movieItem.title}</h3>
                //   </div>
                // </Link>
              ))}
          </div>
        )}
      </div>

      <div>
        <h2>TV Shows</h2>
        {tv.length === 0 ? (
          <p>No TV shows found for "{query}"</p>
        ) : (
          <div className="movieTv-grid">
            {tv &&
              tv.map((tvItem) => (
                <Common item={tvItem} />
                // <Link
                //   to={`/TvShows/TvShowDetail/${tvItem.id}`}
                //   key={tvItem.id}
                //   className="movieTv-card"
                // >
                //   <div key="{tvItem.id}">
                //     <img
                //       src={`https://image.tmdb.org/t/p/w500/${tvItem.poster_path}`}
                //       alt={tvItem.name}
                //       className="movieTv-poster"
                //     />
                //     <h3 className="movieTv-title">{tvItem.name}</h3>
                //   </div>
                // </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchResult;
