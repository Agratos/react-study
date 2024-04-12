import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import { Alert, Dropdown, SplitButton } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { useSearchParams } from "react-router-dom";
import { useSearchMovieQuery } from "../../hooks/apis/useSearchMovie";
import { useMovieGenreQuery } from "../../hooks/apis/useMovieGenre";
import SearchCard from "../../coomon/MovieCard/SearchCard";
import platformStore from '../../store/platformStore';


// nav 바에서 클릭해서 온경우
// keyword 입력해서 온 경우
const MoviePage = () => {
    const sortList = [`정렬 없음`, `인기순 ( up )`, `인기순 ( down )`]
    const [movieData, setMovieData] = useState([]);
    const [query, setQuery] = useSearchParams();
    const [page, segPage] = useState(1);
    const [sortType, setSortType] = useState(0)
    const keyword = query.get('q');

    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page, sort: sortType});
    const { data: list } = useMovieGenreQuery();
    const platform = platformStore((state) => state.platform);

    useEffect(() => {
        if(keyword){
            switch(sortType){
                case 1:
                    setMovieData(data?.sort((a, b) => b.popularity - a.popularity))
                    break;
                case 2:
                    setMovieData(data?.sort((a, b) => a.popularity - b.popularity))
                    break;
                default: 
                    setMovieData(data)
                    break;
            }
        } else {
            setMovieData(data)
        }
    }, [data])

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
        <Wrapper>
            <ButtonWrapper>
                <DropDown
                    align={{ lg: 'start' }}
                    title={sortList[sortType]}
                >
                    <Dropdown.Item onClick={() => setSortType(0)}>{sortList[0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortType(1)}>{sortList[1]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortType(2)}>{sortList[2]}</Dropdown.Item>
                </DropDown>
                {}
            </ButtonWrapper>
            <SearchWrapper platform={platform}>
                {movieData?.slice(0, 400).map((movie, index) => (
                    <SearchCard movie={movie} key={index}/>
                ))}
            </SearchWrapper>
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
                    breakLabel={platform !== 'mobile' ? '...' : ''}
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={data?.total_pages}
                    marginPagesDisplayed={platform !== 'mobile' ? 2 : 0}
                    pageRangeDisplayed={platform !== 'mobile' ? 9 : 5}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                    forcePage={page - 1}
                />
            </PaginationWrapper> 
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const SearchWrapper = styled.div`
    ${({platform}) => platform !== 'mobile' ? css`
        width: 80%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    ` : css`
        display: flex;
        flex-direction: column;
        width: 100%;
    `}
`;
const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px 24px;
`;
const DropDown = styled(SplitButton)`
   
`;

export default MoviePage