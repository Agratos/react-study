import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.style.css";

import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({title, movies, responsive}) => {
    return (
        <div className="popular-movies">
            <h3>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider"
                containerClass="carousel-container"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    )
}

export default MovieSlider