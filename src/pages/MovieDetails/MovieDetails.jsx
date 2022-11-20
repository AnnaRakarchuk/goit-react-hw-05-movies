import { useParams } from "react-router-dom";
import { getMovieById } from "services/api";
import { useEffect, useState } from "react";

const baseUrl ='https://image.tmdb.org/t/p/w500/';

export const MovieDetails =() =>{
    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);
    useEffect(()=>{
        getMovieById(movieId).then(setMovie)
    },[movieId]);

    if(!movie){
        return;
    }

    return <div>
        <h2>{movie.title} </h2>
        <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <p>Overview: {movie.overview}</p>
    </div>;
}