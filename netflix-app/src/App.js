import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

// 홈페이지
// 영화 전체보여주는 페이지 (서치)
// 영화 디테일 페이지
// 추천 영화 /movies/:id/recomandation
// 리뷰 /movies/:id/reviews

const App = () => {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="movies">
                        <Route index element={<MoviePage />} />
                        <Route path=":id" element={<MovieDetailPage />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default App;
