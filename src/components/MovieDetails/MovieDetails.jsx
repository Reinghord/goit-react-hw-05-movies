import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from 'api/tmdb_api';
import s from './MovieDetails.module.css';
import { Outlet } from 'react-router-dom';

function MovieDetails() {
  const [details, setDetails] = useState();

  const params = useParams();
  const location = useLocation();
  console.log(location.state);
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
      <NavLink
        to={
          location.state?.from
            ? `/${location.state?.from?.pathname}${location.state?.from?.search}`
            : '/movies'
        }
        className={s.link__back}
      >
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
            {details && details.title} (
            {details && details.release_date.slice(0, 4)})
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
              <NavLink to="cast" state={{ from: location.state?.from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
