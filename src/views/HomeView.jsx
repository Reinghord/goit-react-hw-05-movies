import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTitles } from 'api/tmdb_api';
import s from './HomeView.module.css';

function HomeView() {
  const [titles, setTitles] = useState([]);

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
          <Link to={`movies/${title.id}`} className={s.link}>
            {title.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default HomeView;
