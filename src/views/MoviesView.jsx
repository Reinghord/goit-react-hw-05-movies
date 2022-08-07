import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'api/tmdb_api';

function MoviesView() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  //Method to store input value in component state
  const onHandleInput = e => {
    setValue(e.currentTarget.value);
  };

  //Method to handle search submit
  //Prevents page reloading
  //Lifting state up using onSubmit prop
  const onHandleSubmit = async e => {
    e.preventDefault();
    const result = await fetchMovies(value);
    setMovies(result);
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="search"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInput}
        />
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesView;
