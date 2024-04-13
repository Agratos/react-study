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
    const sortList = [`인기순 ( up )`, `인기순 ( down )`]
    const [movieData, setMovieData] = useState(null);
    const [query, setQuery] = useSearchParams();
    const [page, segPage] = useState(1);
    const [sortType, setSortType] = useState(0);
    const [genre, setGenre] = useState(null);
    const keyword = query.get('q');

    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page, sort: sortType, genre: genre?.id});
    const { data: list } = useMovieGenreQuery();
    const platform = platformStore((state) => state.platform);

    useEffect(() => {
        if(keyword && genre.id){
            const temp = data?.filter(({genre_ids}) => genre_ids.includes(genre.id))
            sortType === 1 ? 
                setMovieData(temp?.sort((a, b) => a.popularity - b.popularity)):
                setMovieData(temp?.sort((a, b) => b.popularity - a.popularity))
        } else if(keyword){
            sortType === 1 ? 
                setMovieData(data?.sort((a, b) => a.popularity - b.popularity)):
                setMovieData(data?.sort((a, b) => b.popularity - a.popularity))
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

    const handleGenre = ({id, name}) => {
        if(genre === id){
            setGenre(null);
        } else {
            setGenre({id, name});
        }
    }

    return (
        <Wrapper>
            <ButtonWrapper>
                <SortButton
                    align={{ lg: 'start' }}
                    title={sortList[sortType]}
                >
                    <Dropdown.Item onClick={() => setSortType(0)}>{sortList[0]}</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortType(1)}>{sortList[1]}</Dropdown.Item>
                </SortButton>
                {platform !== 'mobile' ? 
                    list?.map(({name, id}, index) => (
                        <GenreButton 
                            onClick={() => handleGenre(id)}
                            click={id === genre ? 'true' : 'false'}
                            key={index}
                        >{name}</GenreButton>
                    )):
                    <SortButton
                        align={{ lg: 'start' }}
                        title={genre?.name ?? '장르'}
                    >
                        {
                            list?.map(({name, id}, index) => (
                                <Dropdown.Item  
                                    onClick={() => handleGenre({id, name})}
                                    key={index}
                                >{name}</Dropdown.Item >
                            ))
                        }
                    </SortButton>
                }
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
const SortButton = styled(SplitButton)`
    margin: 8px;
`;
const GenreButton = styled.div`
    margin: 8px;
    background-color: #0d6efd;
    color: white;
    align-items: center;
    border-radius: 6px;
    padding: 6px 12px;
    cursor: pointer;
    ${({click}) => click === 'true' && css`
        background-color: #37c232;
    `}
`;

export default MoviePage