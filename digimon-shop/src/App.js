import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
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
    return (
        <Wrapper>
            <NavBar />
            <Routes>
                <Route path='/' element={<ProductAll />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
            {/* <Footer /> */}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;


export default App;
