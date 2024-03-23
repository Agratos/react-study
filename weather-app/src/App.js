import { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import KakaoMap from './component/KakaoMap';


// 1. 앱이 실행되자마자 현재 위치 기반이 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다. (1. 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
// 6. 로딩 스피너가 돈다
const App = () => {
    const [weather, setWeather] = useState(null);
    const [position, setPosition] = useState(null); 
    const [cities, setCities] = useState(null); // button array
    const [city, setCity] = useState(null); // useser select city
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentLocation();
    }, [])

    useEffect(() => {
        position && getWeatherByCurrentLocation(position);
    }, [position])

    useEffect(() => {
        city && getWeatherByCity(city);
    }, [city])

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            getWeatherByCurrentLocation({lat, lon})
        });
    }

    const getWeatherByCurrentLocation = async({lat, lon}) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a227bf3b4a111accf8d7eb89abe290ab&units=metric`; 

        setIsLoading(true);
        try{
            let response = await fetch(url);
            let data = await response.json();
            setWeather(data);
            console.log(data);
            handleSetCities(data?.name);
            setTimeout(() => {
                setIsLoading(false);
            }, 750)
        } catch {
            setWeather(null);
            handleSetCities(null)
            setIsLoading('error');
        }
    }

    const getWeatherByCity = async(city) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a227bf3b4a111accf8d7eb89abe290ab&units=metric`
        
        setIsLoading(true);
        try{
            let response = await fetch(url);
            let data = await response.json();
            setWeather(data);
            console.log(data);
            handleSetCities(data?.name);
            setTimeout(() => {
                setIsLoading(false);
            }, 750)
        } catch {
            setWeather(null);
            handleSetCities(null)
            setIsLoading('error');
        }
    }

    const handleSetCities = (name) => [
        setCities((preCities) => {
            if(preCities){
                const index = preCities.indexOf(name);
                if(index !== -1){
                    preCities.splice(index, 1);
                    preCities.unshift(name);
    
                    return preCities;
                }
            }
            return [name, preCities?.[0], preCities?.[1]]
        })
    ]

    return (
        <Wrapper backgroundUrl={weather && require(`./assets/${weather?.weather[0].main}.png`)}>
            <KakaoMap setPosition={setPosition} />
            <WeatherWrapper>
                <WeatherBox 
                    weather={weather}
                    isLoading={isLoading}
                />
                <WeatherButton 
                    city={city}
                    cities={cities}
                    setCity={setCity}
                />
            </WeatherWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
`;
const WeatherWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 60px;
`;

export default App;
