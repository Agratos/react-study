import React from "react";
import { Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/apis/useSearchMovie";


// nav 바에서 클릭해서 온경우
// keyword 입력해서 온 경우
const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get('q');

    const { data, isLoading, isError, error } = useSearchMovieQuery({keyword});
    
    if(isLoading){
        return <div>Loading</div>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <></>
    )
}

export default MoviePage