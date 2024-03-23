import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
    return (
        <Wrapper>
            <LocationButton>Current</LocationButton>
            <LocationButton>Paris</LocationButton>
            <LocationButton>New York</LocationButton>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-top: 8px;
    padding: 10px;
`;
const LocationButton = styled(Button)``;

export default WeatherButton;