import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.List_trending}>
      {movies.map(movie => (
        <li className={css.Item_trending} key={movie.id}>
          <Link className={css.Link_trending} to={`/movies/${movie.id}`} state={{from:location}}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};
