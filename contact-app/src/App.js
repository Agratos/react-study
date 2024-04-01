import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import ContactFrom from './component/ContactForm';
import ContactList from './component/ContactList';
import Header from './component/Header';

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search 창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저 이름검색을 할 수 있다.
const App = () => {
    return (
        <Wrapper>
            <ContactWrapper>
                <Header />
                <ContactList />
            </ContactWrapper>
            <ContactFrom />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    ${({theme}) => theme.fontFamily.jua}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;
const ContactWrapper = styled.div`
    width: 500px;
    height: 700px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
`;

export default App;
