import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, NavLink, Route, Routes } from 'react-router-dom';
import { fetchMovieDetails } from 'api/tmdb_api';
import s from './MovieDetails.module.css';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

function MovieDetails() {
  const [details, setDetails] = useState();

  const params = useParams();

  //Fetching moview details during mounting
  useEffect(() => {
    try {
      async function fetchMovie() {
        const result = await fetchMovieDetails(params.movieId);
        setDetails(result);
      }
      fetchMovie();
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  return (
    <div>
      <NavLink to="/movies" className={s.link__back}>
        Go back
      </NavLink>

      <div className={s.wrapper}>
        {details && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
            alt={details.title}
          />
        )}

        <div className={s.subwrapper}>
          <h1>
            {details && details.title} ({details && details.release_date})
          </h1>
          <p>Userscore: {details && details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details && details.overview}</p>
          <h3>Genres</h3>
          <p>{details && details.genres.map(genre => genre.name).join(', ')}</p>
        </div>

        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetails;
