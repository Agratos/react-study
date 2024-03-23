import { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

import rainImg from './assets/rain.jpg'

// 1. 앱이 실행되자마자 현재 위치 기반이 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다. (1. 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
// 6. 로딩 스피너가 돈다
const App = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getCurrentLocation();
    }, [])

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            getWeatherByCurrentLocation({lat, lon})
        });
    }

    const getWeatherByCurrentLocation = async({lat, lon}) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a227bf3b4a111accf8d7eb89abe290ab&units=metric`;
        await fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setWeather(data);
            })   
    }

    return (
        <Wrapper backgroundUrl={rainImg}>
            <WeatherBox weather={weather}/>
            <WeatherButton />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
`;

export default App;
