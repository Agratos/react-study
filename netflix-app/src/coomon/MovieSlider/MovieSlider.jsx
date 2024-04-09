import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.style.css";

import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import ButtonGroup from "./component/ButtonGroup";

const MovieSlider = ({title, movies, responsive}) => {
    return (
        <div className="popular-movies">
            <h3>{title}</h3>
                <Carousel
                    itemClass="movie-slider"
                    containerClass="carousel-container"
                    responsive={responsive}
                    infinite={true}
                    //centerMode={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    showDots={true}
                    partialVisbile={true}
                    //arrows={false} 
                    //renderButtonGroupOutside={true} 
                    //customButtonGroup={<ButtonGroup />}
                >
                    {movies?.slice(0, 7).map((movie, index) => (
                        <MovieCard movie={movie} key={index} />
                    ))}
                </Carousel>
        </div>
    )
}

export default MovieSlider