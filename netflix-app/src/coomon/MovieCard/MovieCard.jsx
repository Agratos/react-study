import React from "react";
import { Badge } from "react-bootstrap";

import './MovieCard.style.css';

const MovieCard = ({movie}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.REACT_APP_BACKGROUND_URL}${movie.poster_path})`
            }}
            className="movie-card"
        >
            <div className="overlay">
                <h2>{movie.title}</h2>
                <div className="overlay-badge">
                    {movie?.genre_ids.map((id) => (
                        <Badge bg="danger" className="badge">{id}</Badge>
                    ))}
                </div>
                <div>
                    <div>평점: {movie.vote_average}</div>
                    <div>인기: {movie.popularity}</div>
                    <div>등급: {movie.adult ? 'over18' : 'under18'}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard