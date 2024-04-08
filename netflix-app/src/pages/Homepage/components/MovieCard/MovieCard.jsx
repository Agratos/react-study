import React from "react";
import { Badge } from "react-bootstrap";

import './MovieCard.style.css';

const MovieCard = ({movie}) => {
    console.log(movie)
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.REACT_APP_BACKGROUND_URL}${movie.poster_path})`
            }}
            className="movie-card"
        >
            <div className="overlay">
                <h1>{movie.title}</h1>
                {movie?.genre_ids.map((id) => (
                    <Badge bg="danger">{id}</Badge>
                ))}
                <div>
                    <div>{movie.vote_average}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? 'over18' : 'under18'}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard