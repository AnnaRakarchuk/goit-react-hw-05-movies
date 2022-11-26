import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';
import blankImage from '../../images/no-image_mobile.jpg';
import css from './Cast.module.css';


const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

 const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const cast = await getActors(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  if (!cast) {
    return;
  }

  return (
    <section className={css.Cast_section}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.List}>
          {cast.map(({ id, profile_path, name, character }) => {
            const imageSRC = profile_path
              ? IMAGEURL + profile_path
              : blankImage;
            return (
              <li key={id} className={css.Actor}>
                <img src={imageSRC} alt={name} width={200} height={300} />
                <div>
                  <p>
                    <span>{name}</span>
                  </p>
                  {character ? (
                    <p>
                      <b>Character:</b>
                      <span> {character}</span>
                    </p>
                  ) : (
                    <p>
                      <b>Character:</b>
                      <span> Unknown</span>
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {!cast.length && (
        <p>There is no information about the cast of this film yet. Sorry...</p>
      )}
    </section>
  );
};

export default Cast;