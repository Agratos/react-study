import React from "react"
import { useTopRatedMoviesQuery } from "../../../../hooks/apis/useTopRatedMovies";
import { Alert } from "react-bootstrap";

import MovieSlider from "../../../../coomon/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responseive";

const TopRatedMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if(isLoading){
        return <div>Loading</div>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider 
                title="Top Rated Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    )
}

export default TopRatedMovieSlide;