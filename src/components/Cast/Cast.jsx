import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/tmdb_api';

function Cast() {
  const [details, setDetails] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const result = await fetchMovieCast(params.movieId);
      setDetails(result);
    }
    fetchMovie();
  }, [params]);

  return (
    <div>
      <ul>
        {details &&
          details.cast.map(cast => (
            <li key={cast.id}>
              {cast.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  width="100"
                />
              )}
              <p> {cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Cast;
