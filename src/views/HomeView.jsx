import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTitles } from 'api/tmdb_api';

function HomeView() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function fetchTitlesApp() {
      const result = await fetchTitles();
      setTitles(result);
    }
    fetchTitlesApp();
  }, []);

  return (
    <ul>
      {titles.map(title => (
        <li key={title.id}>
          <Link to={`movies/${title.id}`}>{title.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default HomeView;
