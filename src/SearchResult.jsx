import React, { useContext } from "react";
import { AppContext } from "./context";
import { Link, useNavigate } from "react-router-dom";

function SearchResult() {
  const { movie, tv, query } = useContext(AppContext);
  const navigate = useNavigate();
  ///////logic is same if u dont want to repeat the logic create common ////////////
  // const Common = ({ item }) => {
  //   return (
  //     <Link
  //       to={`/Movies/MovieDetail/${item.id}`}
  //       key={item.id}
  //       className="movieTv-card"
  //     >
  //       <div key="{movieItem.id}">
  //         <img
  //           src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
  //           alt={item.title}
  //           className="movieTv-poster"
  //         />
  //         <h3 className="movieTv-title">{item.title}</h3>
  //       </div>
  //     </Link>
  //   );
  // };
  return (
    <div>
      <div className="back-button">
        <button onClick={() => navigate("/Movies")}>Back</button>
      </div>
      <h1 id="topic">Search Results for "{query}"</h1>
      <h2 id="subTopic">Movies</h2>
      <div className="error-message">
        {movie.length === 0 ? (
          <p>No Movies found for "{query}"</p>
        ) : (
          <div
            className={`movieTv-grid ${tv.length === 1 ? "single-item" : ""}`}
          >
            {movie &&
              movie.map((movieItem) => (
                //<Common item={movieItem} /> //use common function we created above

                /////logic is same if u want to repeat the logic use this way ////////////
                <Link
                  to={`/Movies/MovieDetail/${movieItem.id}`}
                  key={movieItem.id}
                  className="movieTv-card"
                >
                  <div key="{movieItem.id}">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
                      alt={movieItem.title}
                      className="movieTv-poster"
                    />
                    <h3 className="movieTv-title">{movieItem.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>

      <h2 id="subTopic">TV Shows</h2>
      <div className="error-message">
        {tv.length === 0 ? (
          <p>No TV shows found for "{query}"</p>
        ) : (
          <div
            className={`movieTv-grid ${tv.length === 1 ? "single-item" : ""}`}
          >
            {tv &&
              tv.map((tvItem) => (
                //  <Common item={tvItem} />
                <Link
                  to={`/TvShows/TvShowDetail/${tvItem.id}`}
                  key={tvItem.id}
                  className="movieTv-card"
                >
                  <div key="{tvItem.id}">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${tvItem.poster_path}`}
                      alt={tvItem.name}
                      className="movieTv-poster"
                    />
                    <h3 className="movieTv-title">{tvItem.name}</h3>
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
