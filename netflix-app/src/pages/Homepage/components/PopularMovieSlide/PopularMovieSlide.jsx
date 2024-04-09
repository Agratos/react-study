import React from "react"
import { usePopularMoviesQuery } from '../../../../hooks/apis/usePopularMovies';
import { Alert } from "bootstrap";

import MovieSlider from "../../../../coomon/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responseive";

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    
    if(isLoading){
        return <div>Loading</div>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider 
                title="Popular Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    )
}

export default PopularMovieSlide