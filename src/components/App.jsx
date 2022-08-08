import { Routes, Route } from 'react-router-dom';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import Navigation from './Navigation';
import MovieDetails from 'views/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomeView />} />
      </Routes>
    </>
  );
};
