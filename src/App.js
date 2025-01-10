import "./App.css";
import Search from "./Search";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Movies from "./Movies";
import Tv from "./Tv";
import PageNotFound from "./PageNotFound";
import MovieDetail from "./MovieDetail";
import TvShowDetail from "./TvShowDetail";
import { useEffect } from "react";

function App() {
  ///////To Make default route as /Movies whwn the page is first loaded////////////
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/Movies");
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button>
          <Link to="/Movies">Movies</Link>
        </button>
        <button>
          <Link to="/TvShows">Tv Shows</Link>
        </button>
        <Search />
      </header>

      <div className="links">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TvShows" element={<Tv />} />
          <Route path="Movies/MovieDetail/:id" element={<MovieDetail />} />
          <Route path="TvShows/TvShowDetail/:id" element={<TvShowDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
