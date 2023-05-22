import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const Home = lazy(() => import('pages/Home/Home'));
const MoviesView = lazy(() => import('pages//Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
