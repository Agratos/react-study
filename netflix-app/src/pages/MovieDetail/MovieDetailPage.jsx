import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { Alert, Container, Row, Col, Badge, Spinner, Modal } from "react-bootstrap";
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import { useMovieGenreQuery } from "../../hooks/apis/useMovieGenre";
import { useMovieDetailQuery } from "../../hooks/apis/useMovieDetail";
import { useMovieReviewsQuery } from "../../hooks/apis/useMovieReviews";
import { useMovieRelatedQuery } from "../../hooks/apis/useMovieRelated";
import { useMovieVideoQuery } from "../../hooks/apis/useMovieVideo";

import platformStore from '../../store/platformStore';
import Reviews from "./components/Reviews";
import RelatedMovies from "./components/RelatedMovies";

const MovieDetailPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error} = useMovieDetailQuery({id});
    const { data: reviews, isLoading: reviewsLoading} = useMovieReviewsQuery({id});
    const { data: related, isLoading: relatedLoading} = useMovieRelatedQuery({id});
    const { data: video, isLoading: videoLoading} = useMovieVideoQuery({id});
    const { data: genreData } = useMovieGenreQuery();
    const platfrom = platformStore((state) => state.platform);

    const [isVideo, setIsVideo] = useState(false);

    if(isLoading || reviewsLoading || relatedLoading || videoLoading){
        return  (
            <LoadingWrapper>
                <LoadingSpinner animation="border" role="status" />
            </LoadingWrapper>
        )
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

    const showGenre = (genreIdList) => {
        if(!genreData) return [];

        const genreNameList = genreIdList?.map(({id}) => {
            const genreObj = genreData?.find((genre) => genre.id === id)
            return genreObj.name;
        })

        return genreNameList
    }

    return (
        <Wrapper>
            <Background path={`${process.env.REACT_APP_BACKGROUND_URL}${data?.backdrop_path}`}/>
            <DetailWrapper platfrom={platfrom}>
                <MovieDetail platfrom={platfrom}>
                    {platfrom !== 'mobile' &&
                        <ImageWrapper platfrom={platfrom}>
                            <Image src={`${process.env.REACT_APP_DETAIL_URL}${data?.poster_path}`} alt={'poster'}/>
                            <PlayButtonWrapper>
                                <PlayButton icon={faCirclePlay} onClick={() => setIsVideo(true)}/>
                            </PlayButtonWrapper>
                        </ImageWrapper>
                    }
                    <InfoWrapper platfrom={platfrom}>
                        <BedgeWrapper>
                            {showGenre(data?.genres).map((name) => (
                                <Badge bg="danger" className="badge" key={name}>{name}</Badge>
                            ))}
                        </BedgeWrapper>
                        <Title>{data?.title}</Title>
                        <SubTitle>{data?.tagline}</SubTitle>
                        {platfrom === 'mobile' && <ViedeoPlay onClick={() => setIsVideo(true)}>미리보기</ViedeoPlay>}
                        <Info>
                            <InfoLabel>평점-</InfoLabel>
                            <Average>{data?.vote_average}</Average>
                            <InfoLabel>추천-</InfoLabel>
                            <VoteCount>{data?.vote_count}</VoteCount>
                        </Info>
                        <Overview>
                            {data?.overview}
                        </Overview>
                        <BudgeWrapper>
                            <BudgetLabel>Budget</BudgetLabel>
                            <BudgetValue>${data?.budget.toLocaleString()}</BudgetValue>
                        </BudgeWrapper>
                        <BudgeWrapper>
                            <BudgetLabel>Revenue</BudgetLabel>
                            <BudgetValue>${data?.revenue.toLocaleString()}</BudgetValue>
                        </BudgeWrapper>
                        <BudgeWrapper>
                            <BudgetLabel>Release Date</BudgetLabel>
                            <BudgetValue>{data?.release_date}</BudgetValue>
                        </BudgeWrapper>
                        <BudgeWrapper>
                            <BudgetLabel>Run Time</BudgetLabel>
                            <BudgetValue>{data?.runtime}분</BudgetValue>
                        </BudgeWrapper>
                    </InfoWrapper> 
                </MovieDetail>
                <ReviewWrapper>
                    <Button>Review<ButtonLabel>{`(${reviews?.total_results})`}</ButtonLabel></Button>
                </ReviewWrapper>
                <Reviews list={reviews?.results}/>
                <ReviewWrapper>
                    <Button>Related Movies</Button>
                </ReviewWrapper>
                <RelatedMovies list={related ?? []} />
                <YouTubeWrapper show={isVideo} onHide={() => setIsVideo(false)}>
                    <YouTube
                        videoId={video?.results[0]?.key ?? null}
                        opts={{
                            width: platfrom === 'mobile' ? '100%' : '600px',
                            height: platfrom === 'mobile' ? '300px' : '400px'
                        }}
                    />
                </YouTubeWrapper>
            </DetailWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    color: white;
    flex-direction: column;
    width: 100%;
    max-width: min-content;
    margin: auto;
    position: relative;
`;
const Background = styled.div`
    width: 100%;
    height: 56vh;
    top:0px;
    left: 0;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${({path}) => path});
    &::before{
        content: '';
        background: linear-gradient(to top, black, transparent);
        position: absolute;
        left: 0;
        height: 56vh;
        width: 100%;
    }
`;
const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    margin: auto;
    width: 100%;
`;
const MovieDetail = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    color: white;
    ${({platform}) => platform !== 'mobile' && css`
        flex-direction: row;
    `}
`;
const ImageWrapper = styled.div`
    position: relative;
    z-index: 2;
    height: 640px;
    width: 500px;
    display: flex;
    align-items: end;
    flex-direction: column;
    padding: 24px;
    margin-top: ${({platfrom}) => platfrom !== 'mobile' && '40vh'};
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const InfoWrapper = styled(ImageWrapper)`
    align-items: start;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${({platfrom}) => platfrom === 'mobile' && css`
        height: 100%;
        margin-top: 40px;
    `}
`;
const BedgeWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
`;
const SubTitle = styled.div`
    font-size: 24px;
`;
const Info = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 16px;
    border-bottom: 1px solid white;
`;
const InfoLabel = styled.label`
    font-size: 14px;
`;
const Average = styled.div`
    margin-left: 4px;
    margin-right: 16px;
`;
const VoteCount = styled(Average)``;
const Overview = styled.div`
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid white;
    margin-top: 16px;
    font-size: 14px;
`;
const BudgeWrapper = styled.div`
    display: flex;
    margin: 16px 0;
`;
const BudgetLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 30px;
    border-radius: 16px;
    background-color: #212529;
    text-align: center;
    font-size: 14px;
`;
const BudgetValue = styled.div`
    margin: auto;
    margin-left: 16px;
    font-size: 20px;
`;
const ReviewWrapper = styled.div`
    display: flex;
    margin: 0 22px;
    border-bottom: 1px solid white;
`;
const Button = styled.div`
    display: flex;
    align-items: first baseline;
    border: none;
    font-size: 28px;
    font-weight: bolder;
    color: red;
`;
const ButtonLabel = styled.div`
    font-size: 24px;
    font-weight: normal;
`;
const LoadingWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const LoadingSpinner = styled(Spinner)`
    width: 300px;
    height: 300px;
`;
const PlayButtonWrapper = styled.div`
    position: absolute;
    background-color: inherit;
    width: calc(100% - 48px);
    height: calc(100% - 48px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:hover{
        background-color: #25252575;
        :first-child {
            opacity: 1;
        }
    }
`;
const PlayButton = styled(FontAwesomeIcon)`
    width: 30%;
    height: 30%;
    color: white;
    cursor: pointer;
    opacity: 0.4;
`;
const ViedeoPlay = styled.div`
    padding: 4px 16px;
    background-color: #2c2c2cb8;
    border-radius: 16px;
    margin-top: 16px;
    cursor: pointer;
    &:hover{
        color: yellow;
    }
`;
const YouTubeWrapper = styled(Modal)`
    :first-child {
        background-color: inherit;
        border: none;
    }
`;

export default MovieDetailPage