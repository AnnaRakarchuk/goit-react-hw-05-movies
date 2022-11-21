import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.prevetDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          placeholder="Enter the movie..."
          autoComplete="off"
          onChange={handleChange}
          value={query}
        />
        <button className={css.Btn_form} type="submit">
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
