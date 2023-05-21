import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const Home = lazy(() => import('components/Home/Home'));
const MoviesView = lazy(() => import('components/Movies/Movies'));
const MovieDetails = lazy(() => import('views/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesView />}>
            <Route path=":movieId/*" element={<MovieDetails />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
