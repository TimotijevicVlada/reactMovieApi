import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0a7effe2b919e22102821404ff148b5b&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=0a7effe2b919e22102821404ff148b5b&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    fetch(SEARCH_API + searchTerm)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
    setSearchTerm("");
  }

  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <nav className="navbar">
        <h1>Welcome to Vladimir's movie API</h1>
      </nav>
      <header className="header">
        <form onSubmit={handleOnSubmit}>
          <input
            value={searchTerm}
            className="search"
            type="text"
            placeholder="Search your movie"
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-wrapper">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
