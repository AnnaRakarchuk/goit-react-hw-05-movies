import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { useEffect, useState, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <button className={css.Go_back} type="button" onClick={handleGoBack}>
        Go back
      </button>
      <div className={css.Movie_card}>
        <div>
          <img
            className={css.Movie_image}
            src={`${baseUrl + movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <h2 className={css.Title}>{movie.title} </h2>
          <b>Overview</b>
          <p className={css.Overview}> {movie.overview}</p>
        </div>
      </div>
      <section className={css.Add_section}>
        <h3 className={css.Add_title}>Additional information</h3>
        <ul>
          <li>
            <Link className={css.Info_link} to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.Info_link} to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
