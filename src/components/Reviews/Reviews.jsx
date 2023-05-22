import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/tmdb_api';

function Reviews() {
  const [reviews, setReviews] = useState();

  const params = useParams();

  //Fetching reviews on mounting
  useEffect(() => {
    async function fetchDetails() {
      const result = await fetchMovieReviews(params.movieId);
      setReviews(result);
    }
    fetchDetails();
  }, [params]);

  return (
    <div>
      <ul>
        {reviews && reviews.total_results !== 0
          ? reviews.results.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          : 'No reviews for this film.'}
      </ul>
    </div>
  );
}

export default Reviews;
