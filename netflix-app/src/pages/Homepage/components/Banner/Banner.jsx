import React from 'react';
import Alert from 'react-bootstrap/Alert';

import { usePopularMoviesQuery } from '../../../../hooks/apis/usePopularMovies';
import platformStore from '../../../../store/platformStore';

import './Banner.style.css';

const Banner = () => {
	const { data, isLoading, isError, error } = usePopularMoviesQuery();
	const { platform } = platformStore((state) => state);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <Alert variant='danger'>{error.message}</Alert>;
	}

	return (
		<div
			style={
				!isLoading
					? {
							backgroundImage: `url(${process.env.REACT_APP_BACKGROUND_URL}${data?.results[0].poster_path})`,
					  }
					: {}
			}
			className='banner'
		>
			<div className='text-white banner-text-area'>
				<h1>{data?.results[0].title}</h1>
				<p>{data?.results[0].overview}</p>
			</div>
		</div>
	);
};

export default Banner;
