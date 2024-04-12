import React, { useState } from "react";
import styled, { css } from "styled-components";

const ReviewCard = ({review}) => {
    const [isClick, setIsClick] = useState(false);

    return (
        <Card>
            <Author>{review.author}</Author>
            <Content isclick={isClick ? 'true' : 'false'}>{review.content}</Content>
            <Button onClick={() => setIsClick(!isClick)}>
                {isClick ? 'close' : 'more'}
            </Button>
        </Card>
    )
}
const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px;
    background-color: #212529;
    margin: 16px 0;
    border-radius: 16px;
`;
const Author = styled.div`
    margin-bottom: 16px;
`;
const Content = styled.div`
    ${({isclick}) => isclick==='false' && css`
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        word-break: keep-all;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        flex: 1;
    `}
`;
const Button = styled.div`
    margin-top: 20px;
    margin-bottom: -8px;
    cursor: pointer;
`;

export default ReviewCard;
