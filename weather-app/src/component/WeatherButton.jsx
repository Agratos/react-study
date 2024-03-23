import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';

const WeatherButton = ({city,cities, setCity}) => {
    return (
        <Wrapper>
            {cities?.map((name, index) => (
                <LocationButton 
                    ket={`${name}${index}`}
                    onClick={() => setCity(name)}
                    //isClick={`${city === name}`}
                    isClick={`${index === 0}`}
                >{name}</LocationButton>
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    height: 60px;
    margin-top: 8px;
    padding: 10px;
`;
const LocationButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    padding: auto;
    font-size: 14px;
    padding: 16px;
    ${({isClick}) => isClick == 'true' && css`
        background-color: #49c249;
        color: black;
    `}
`;

export default WeatherButton;