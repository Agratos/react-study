import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const NotFoundPage = () => {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <NotFound />
            <HomeButton onClick={() => navigate("/")}>
                Netflix 홈
            </HomeButton>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #141414;
`;
const NotFound = styled.div`
    width: 600px;
    height: 440px;
    background-image: url("assets/notFound.png");
    background-repeat: no-repeat;
    background-size: contain;
`;
const HomeButton = styled.button`
    font-size: 24px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #ffffff;
    transition: 0.8s;
    cursor: pointer;
    &:hover{
        background-color: #ffffffcf;
    }
`;

export default NotFoundPage