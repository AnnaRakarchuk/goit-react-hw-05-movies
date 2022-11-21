import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <div>
      <h1 className={css.Home_title}>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
