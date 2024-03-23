import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from '../hooks/useKakaoLoader';

const KakaoMap = ({setPosition}) => {
    useKakaoLoader();

    return (
        <Wrapper>
            <Map
                id='map'
                center={{lat: 38, lng: 127}}
                style={{
                    width: '100%',
                    height: '100%',
                    color: 'darkblue'
                }}
                level={12}
                onClick={(_, mouseEvent) => {
                    const latlng = mouseEvent.latLng
                    setPosition({
                        lat: latlng.getLat(),
                        lon: latlng.getLng(),
                    })
                }}
            />
        </Wrapper>

    )
}
const Wrapper = styled.div`
    flex: 1;
    margin: 36px 0 36px 36px;
    border: 2px solid black;
    border-radius: 16px;
    overflow: hidden;
`;

export default KakaoMap;