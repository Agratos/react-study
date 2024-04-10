import React from "react"
import { useUpcomingMoviesQuery } from "../../../../hooks/apis/useUpcomingMovies";
import { Alert } from "react-bootstrap";

import MovieSlider from "../../../../coomon/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responseive";

const UpcomingMovieSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if(isLoading){
        return <div>Loading</div>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div>
            <MovieSlider 
                title="Upcoming Movies"
                movies={data.results}
                responsive={responsive}
            />
        </div>
    )
}

export default UpcomingMovieSlide;