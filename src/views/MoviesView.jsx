import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'api/tmdb_api';
import s from './MoviesView.module.css';

function MoviesView() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  //Method to store input value in component state
  const onHandleInput = e => {
    setValue(e.currentTarget.value);
  };

  //Method to handle search submit
  //Prevents page reloading
  const onHandleSubmit = async e => {
    e.preventDefault();
    try {
      if (!value) {
        throw new Error('Empty string is not allowed!');
      }
      const result = await fetchMovies(value.trim(''));
      setMovies(result);
    } catch (error) {
      console.log(error);
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
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
          onChange={onHandleInput}
        />
      </form>
      <ul className={s.list}>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link to={`${movie.id}`} className={s.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesView;
