import React from "react"
import MovieSlider from "../../../coomon/MovieSlider/MovieSlider"

import { responsive } from "../../../constants/responseive"

const RelatedMovies = ({list}) => {
    return (
        list ? 
        <MovieSlider 
            title=""
            movies={list?.results}
            responsive={responsive}
        />
        : <></>
    )
}

export default RelatedMovies