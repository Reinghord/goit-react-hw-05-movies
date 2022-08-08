import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/tmdb_api';

function Reviews() {
  const [details, setDetails] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const result = await fetchMovieReviews(params.movieId);
      setDetails(result);
    }
    fetchDetails();
  }, [params]);

  return (
    <div>
      <ul>
        {details &&
          details.results.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Reviews;
