import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'api/tmdb_api';
import s from './MoviesView.module.css';

function MoviesView() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('name') ?? '';
  const location = useLocation();

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  //Method to handle search submit
  //Prevents page reloading
  const onHandleSubmit = async e => {
    e.preventDefault();
    try {
      if (!searchQuery) {
        throw new Error('Empty string is not allowed!');
      }
      const result = await fetchMovies(searchQuery);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={s.form}>
        <button type="submit" className={s.button}>
          <span>Search</span>
        </button>

        <input
          type="text"
          name="search"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
          onChange={e => updateQueryString(e.target.value)}
        />
      </form>
      <ul className={s.list}>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link
              to={`${movie.id}`}
              state={{ from: location }}
              className={s.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesView;
