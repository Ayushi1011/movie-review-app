import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import Tv from "./Tv";
import PageNotFound from "./PageNotFound";
import MovieDetail from "./MovieDetail";
import TvShowDetail from "./TvShowDetail";
import Home from "./Home";
import SearchResult from "./SearchResult";
//import { useEffect } from "react";

function App() {
  ///////To Make default route as /Movies when the page is first loaded////////////
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/Movies");
  // }, []);

  return (
    <>
      <div className="links">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TvShows" element={<Tv />} />
          <Route path="Movies/MovieDetail/:id" element={<MovieDetail />} />
          <Route path="TvShows/TvShowDetail/:id" element={<TvShowDetail />} />
          <Route path="/searchResults" element={<SearchResult />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
