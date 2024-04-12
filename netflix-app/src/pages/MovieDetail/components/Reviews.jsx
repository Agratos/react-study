import React, { useState } from "react"
import styled from "styled-components"

import ReactPaginate from 'react-paginate';
import ReviewCard from "./ReviewCard"

const Reviews = ({list}) => {
    const [page, segPage] = useState(1);

    const handlePageChange = ({selected}) => {
        segPage(selected + 1)
    }

    return (
        <Wrapper>
            {list.length !== 0 && <Title>Review</Title>}
            {list?.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
            {list.length > 10 &&
                <PaginationWrapper>
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
                        pageCount={list?.total_pages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        forcePage={page - 1}
                        
                    />
                </PaginationWrapper> 
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin: 24px;
`;
const Title = styled.div`
    font-size: 28px;
    font-weight: bolder;
`;
const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;



export default Reviews