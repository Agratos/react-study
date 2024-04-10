import React from "react";
import { useNavigate } from 'react-router-dom';
import { Badge } from "react-bootstrap";

import { useMovieGenreQuery } from "../../hooks/apis/useMovieGenre";
import './MovieCard.style.css';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    const { data: genreData } = useMovieGenreQuery();

    const showGenre = (genreIdList) => {
        if(!genreData) return [];

        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id)
            return genreObj.name;
        })

        return genreNameList
    }

    const cardClick = () => {
        navigate(`/movies/${movie.id}`)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${process.env.REACT_APP_BACKGROUND_URL}${movie.poster_path})`
            }}
            className="movie-card"
            onClick={cardClick}
        >
            <div className="overlay">
                <h2>{movie.title}</h2>
                <div className="overlay-badge">
                    {showGenre(movie?.genre_ids).map((name) => (
                        <Badge bg="danger" className="badge" key={name}>{name}</Badge>
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