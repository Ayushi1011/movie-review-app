import React, { useContext } from "react";
import { AppContext } from "./context";
import { Link } from "react-router-dom";

function SearchResult() {
  const { movie, tv, query } = useContext(AppContext);
  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div>
        <h2>Movies</h2>
        {movie.length === 0 ? (
          <p>No Movies found for "{query}"</p>
        ) : (
          <div>
            {movie &&
              movie.map((movieItem) => (
                <Link
                  to={`/Movies/MovieDetail/${movieItem.id}`}
                  key={movieItem.id}
                >
                  <div key="{movieItem.id}">
                    <h3>{movieItem.title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
                      alt={movieItem.title}
                    />
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>

      <div>
        <h2>TV Shows</h2>
        {tv.length === 0 ? (
          <p>No TV shows found for "{query}"</p>
        ) : (
          <div>
            {tv &&
              tv.map((tvItem) => (
                <Link to={`/TvShows/TvShowDetail/${tvItem.id}`} key={tvItem.id}>
                  <div key="{tvItem.id}">
                    <h3>{tvItem.name}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${tvItem.poster_path}`}
                      alt={tvItem.name}
                    />
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchResult;
