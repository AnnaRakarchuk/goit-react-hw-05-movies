import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { useEffect, useState, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';
import blankImage from '../../images/no-image_mobile.jpg';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

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

  const { genres, release_date, vote_average, poster_path } =
  movie;
const imageSRC = poster_path ? IMAGEURL + poster_path : blankImage;
const userScore = Math.round((Number(vote_average) * 100) / 10);
const movieGenres = genres.map(genre => genre.name).join(' ');
const releaseDate = release_date.slice(0, 4);

  return (
    <>
      <button className={css.Go_back} type="button" onClick={handleGoBack}>
        Go back
      </button>
      <div className={css.Movie_card}>
        <div>
          <img
            className={css.Movie_image}
            src={`${imageSRC}`}
            alt={movie.title}
          />
        </div>
        <div>
          <h2 className={css.Title}>{movie.title} {releaseDate && `(${releaseDate})`} </h2>
          <p>{userScore > 0 && <p>User Score: {userScore}%</p>}</p>
          <b>Overview</b>
          <p className={css.Overview}> {movie.overview}</p>
          <b>Genres</b>
          <p className={css.Genre}>{movieGenres || ' - '}</p>
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
