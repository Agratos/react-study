import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Login,
    ProductAll,
    ProductDetail
} from './page';
import NavBar from './component/NavBar';

// 1. 로그인
// 1-1. 네비게이션바
// 2. 전체 상품 페이지
// 3. 상품 상세 페이지 
// 4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인 페이지가 먼저 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이되면 상품 디테일페이지를 볼수없다. 다시 로그인을 해야 보인다.
// 7. 상품을 검색할 수 있다.

const App = () => {
    const authenticate = useSelector(state => state.auth.authenticate)
    const [isMobile, setIsMobile] = useState(window.outerWidth < 800);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.outerWidth < 800);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <Wrapper>
            <NavBar isMobile={isMobile} />
            <RoutesWrapper>
                <Routes>
                    <Route path='/' element={<ProductAll ismobile={isMobile} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/product/:id' element={ authenticate ? <ProductDetail /> : <Navigate to='/login' />} />
                </Routes>
            </RoutesWrapper>
            {/* <Footer /> */}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: black;
`;
const RoutesWrapper = styled.section`
    flex: 1;
    margin-top: 60px;
`;


export default App;
