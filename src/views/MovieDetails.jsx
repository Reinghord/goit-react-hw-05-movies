import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'api/tmdb_api';

function MovieDetails() {
  const [details, setDetails] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const result = await fetchMovieDetails(params.movieId);
      setDetails(result);
    }
    fetchMovie();
  }, [params]);

  return (
    <div>
      <NavLink to="/movies">Go back</NavLink>
      <div>
        {' '}
        {details && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
            alt={details.title}
          />
        )}
        <div>
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
      <Outlet />
    </div>
  );
}

export default MovieDetails;
