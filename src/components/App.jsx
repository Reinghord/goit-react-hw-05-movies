import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

const HomeView = lazy(() => import('views/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView'));
const MovieDetails = lazy(() => import('views/MovieDetails'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
          <Route path="*" element={<HomeView />} />
        </Routes>
      </Suspense>
    </>
  );
};
