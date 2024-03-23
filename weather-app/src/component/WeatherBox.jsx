import React from 'react';
import styled from 'styled-components';

const WeatherBox = ({ weather }) => {
    console.log(weather)
    return (
        <Wrapper>
            <Location>{weather?.name}</Location>
            <TemperatureWrapper>
                <TemperatureBox>
                    <TemperatureLabel>Now</TemperatureLabel>
                    <Temperature>{weather?.main.temp}ºC / {(weather?.main.temp * 1.8 + 32).toFixed(1)}ºF</Temperature>
                </TemperatureBox>
                <TemperatureBox>
                    <TemperatureLabel>Min</TemperatureLabel>
                    <MinMaxTemperature>{weather?.main.temp_min}ºC / {(weather?.main.temp_min * 1.8 + 32).toFixed(1)}ºF</MinMaxTemperature>
                </TemperatureBox>
                <TemperatureBox>
                    <TemperatureLabel>Max</TemperatureLabel>
                    <MinMaxTemperature>{weather?.main.temp_max}ºC / {(weather?.main.temp_max * 1.8 + 32).toFixed(1)}ºF</MinMaxTemperature>
                </TemperatureBox>
            </TemperatureWrapper>
            <Weather>{weather?.weather[0].description}</Weather>
        </Wrapper>
    ) 
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 320px;
    border: 0.5px solid black;
    border-radius: 16px;
    padding: 40px ;
    background-color: white;
    font-weight: bolder;
`;

const Location = styled.div`
    font-size: 20px;
    margin-bottom: 8px;
`;
const Temperature = styled.div`
    font-size: 24px;
    margin-bottom: 8px;
`;
const TemperatureWrapper = styled.section`
`;
const TemperatureBox = styled.div`
    line-height: 22px;
    margin: 16px 0px;
`;
const TemperatureLabel = styled.label``;
const MinMaxTemperature = styled.div`
    font-size: 24px;
`;
const Weather = styled.div`
    font-size: 24px;
    margin-top: 8px;
`;


export default WeatherBox;