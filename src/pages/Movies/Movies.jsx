import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'api/tmdb_api';
import s from './Movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('name') ?? '';
  const location = useLocation();

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function fetching() {
      const result = await fetchMovies(searchQuery);
      if (result.length === 0) {
        return setStatus('rejected');
      }
      setMovies(result);
      setStatus('loaded');
    }
    if (!searchQuery) {
      return;
    }
    fetching();
  }, [searchQuery]);

  //Method to handle search submit
  //Prevents page reloading
  const onHandleSubmit = async e => {
    e.preventDefault();
    if (!e.currentTarget.search.value.trim()) {
      throw new Error('Empty string is not allowed!');
    }
    updateQueryString(e.currentTarget.search.value);
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={s.form}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className={s.input}
        />
        <button type="submit" className={s.button}>
          <span>Search</span>
        </button>
      </form>
      {status === 'idle' && <div>Try to seach something!</div>}
      {status === 'rejected' && <div>Nothing found, folks!</div>}
      {status === 'loaded' && (
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
      )}
    </>
  );
}

export default Movies;
