import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTitles } from 'api/tmdb_api';
import s from './HomeView.module.css';

function HomeView() {
  const [titles, setTitles] = useState([]);
  const location = useLocation();

  //Fetch trending movies
  useEffect(() => {
    try {
      async function fetchTrendingMovies() {
        const result = await fetchTitles();
        setTitles(result);
      }
      fetchTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ul className={s.list}>
      {titles.map(title => (
        <li key={title.id} className={s.item}>
          <Link
            to={`movies/${title.id}`}
            className={s.link}
            state={{ from: location }}
          >
            {title.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default HomeView;
