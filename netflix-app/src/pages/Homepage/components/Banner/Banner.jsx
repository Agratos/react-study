import React from "react"
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies"

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if(isLoading) {

    }

    if(isError) {
        
    }

    console.log(data)

    return (
        <div>Banner</div>
    )
}

export default Banner