import { useState, useEffect } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'api/tmdb_api';

function MovieDetails() {
  const [details, setDetails] = useState([]);

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
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
          alt={details.title}
        />
        <div>
          <h1>
            {details.title} ({details.release_date})
          </h1>
          <p>Userscore: {details.vote_average}</p>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          {/* <p>{details.genres.map(genre => genre.name)}</p> */}
        </div>
        <div>
          <p>Additional information</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
