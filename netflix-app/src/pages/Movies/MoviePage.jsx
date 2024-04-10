import React, { useState } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/apis/useSearchMovie";
import MovieCard from "../../coomon/MovieCard/MovieCard";

// nav 바에서 클릭해서 온경우
// keyword 입력해서 온 경우
const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const [page, segPage] = useState(1);
    const keyword = query.get('q');

    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page});

    if(isLoading){
        return <div>Loading</div>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    const handlePageChange = ({selected}) => {
        segPage(selected + 1)
    }

    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}> 필터 </Col>
                <Col lg={8} xs={12}>
                    <Row>
                        {data?.results.map((movie, index) => (
                            <Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>      
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={data?.total_pages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        forcePage={page - 1}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default MoviePage