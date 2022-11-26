import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import Home  from 'pages/Home/Home';
import Movies  from 'pages/Movies/Movies';
import MovieDetails  from 'pages/MovieDetails/MovieDetails';
import Navigation from './Navigation/Navigation';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

// const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const Navigation = lazy(() => import('./Navigation/Navigation'));

export const App = () => {
  return (
    <>
    <Navigation />
      <Routes>
      <Route path="/" element={<SharedLayout />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
