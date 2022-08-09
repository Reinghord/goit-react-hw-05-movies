import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/tmdb_api';
import s from './Cast.module.css';

function Cast() {
  const [details, setDetails] = useState();

  const params = useParams();

  //Fetching movie cast on mounting object
  useEffect(() => {
    try {
      async function fetchMovie() {
        const result = await fetchMovieCast(params.movieId);
        setDetails(result);
      }
      fetchMovie();
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  return (
    <div>
      <ul className={s.list}>
        {details &&
          details.cast.map(cast => (
            <li key={cast.id} className={s.item}>
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
