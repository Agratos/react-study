import React from "react"
import Alert from 'react-bootstrap/Alert';
import styled from "styled-components";

import "./Banner.style.css";

import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies"

const Banner = () => {
    const { data , isLoading, isError, error } = usePopularMoviesQuery();
    
    if(isLoading) {
        <h1>Loading...</h1>
    }

    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }
    
    return (
        <div style={{
            backgroundImage:
                `url(${process.env.REACT_APP_BACKGROUND_URL}${data?.results[0].poster_path})`
            }}
            className="banner"
        >
            <div className="text-white banner-text-area">
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </div>
    )
}
// const Wrapper = styled.div`
//     width: 100%;
//     height: 56vh;
//     background-image: url(${({url}) => url});
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;

//     &:before {
//         content: '';
//         background: linear-gradient(to top, black, transparent);
//         position: absolute;
//         left: 0;
//         height: 56vh;
//         width: 100%;
//     }
// `;

export default Banner