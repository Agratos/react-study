import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


const NavBar = () => {
    return (
        <Wrapper>
            <LoginSection>
                <FontAwesomeIcon icon={faUser}/>
                <LoginButton>로그인</LoginButton>
            </LoginSection>
            <LogoSection>
                <img src={require('../asset/digimon-title.png')} />
            </LogoSection>
        </Wrapper>
    )
}
const Wrapper = styled.div`
`;
const LoginSection = styled.section`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100vw;
    padding: 16px;
    box-sizing: border-box;
`;
const LoginButton = styled.button`
    border: none;
    padding: 4px 8px;
    border-radius: 8px;
    margin-left: 0px;
    background-color: white;
    font-size: 16px;
    cursor: pointer;
`;
const LogoSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default NavBar;