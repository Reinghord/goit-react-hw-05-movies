import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const Home = lazy(() => import('components/Home/Home'));
const MoviesView = lazy(() => import('components/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('views/Cast'));
const Reviews = lazy(() => import('views/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesView />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetails />}>
            <Route path="cast/" element={<Cast />}></Route>
            <Route path="reviews/" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
