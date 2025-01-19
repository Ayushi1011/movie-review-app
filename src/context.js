import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const TV_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);
  const [query, setQuery] = useState("");

  const getMovies = async () => {
    try {
      const { data } = await axios.get(MOVIE_URL);
      console.log(data.results, "Movies");
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTvShows = async () => {
    try {
      const { data } = await axios.get(TV_URL);
      console.log(data.results, "Tv");
      setTv(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchResults = async (query) => {
    try {
      const { data } = await axios.get(`${SEARCH_URL}${query}`);
      console.log(data.results, "Search Results");
      const movies = data.results.filter((item) => item.media_type === "movie");
      const tvShows = data.results.filter((item) => item.media_type === "tv");
      setMovie(movies);
      setTv(tvShows);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (query) {
  //     getSearchResults(query);
  //   } else {
  //     getMovies();
  //     getTvShows();
  //   }
  // }, [query]);

  useEffect(() => {
    getMovies();
    getTvShows();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movie,
        tv,
        query,
        getMovies,
        getTvShows,
        setQuery,
        getSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
