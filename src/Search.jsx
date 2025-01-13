import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";
import { useNavigate } from "react-router-dom";

function Search() {
  const { query, setQuery, getSearchResults } = useContext(AppContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getSearchResults(query);
    navigate("/searchResults");
    console.log("Search query: ", query);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default Search;
