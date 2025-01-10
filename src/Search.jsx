import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";

function Search() {
  const { query, setQuery } = useContext(AppContext);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
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
