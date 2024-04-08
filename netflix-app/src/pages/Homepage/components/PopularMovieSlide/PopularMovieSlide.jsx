import React from "react"
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from "bootstrap";
import Carousel from 'react-multi-carousel';

import MovieCard from "../MovieCard/MovieCard";
import 'react-multi-carousel/lib/styles.css';
import './PopularMovieSlide.style.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    
    if(isLoading){
        return <div>Loading</div>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div className="popular-movies">
            <h3>Popular Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider"
                containerClass="carousel-container"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {data.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    )
}

export default PopularMovieSlide