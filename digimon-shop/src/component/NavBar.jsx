import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({ authenticate, setAuthenticate }) => {
    const navigate = useNavigate();

    const manueList = [
        '태아기', '유년기', '성장기', '성숙기', '완전체', '궁극체'
    ]

    const handleLogInOut = () => {
        if(authenticate){
            setAuthenticate(false);
        } else {
            navigate('login')
        }
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <Wrapper>
            <LoginSection>
                <FontAwesomeIcon icon={faUser} />
                <LoginButton onClick={handleLogInOut}>
                    {authenticate ? '로그아웃' : '로그인'}
                </LoginButton>
            </LoginSection>
            <LogoSection>
                <Logo 
                    src={'../asset/digimon-title.png'} 
                    onClick={handleLogoClick}
                    alt={'digimon-title'}
                />
            </LogoSection>
            <NavSearchSection>
                <Nav>
                    {manueList.map((item, index) => (
                        <NavButton 
                            key={item + index}
                            onClick={() => console.log(item)}
                        >{item}</NavButton>
                    ))}
                </Nav>
                <SearchSection>
                    <FontAwesomeIcon icon={faSearch} />
                    <SearchInput />
                </SearchSection>
            </NavSearchSection>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    color: ${({theme}) => theme.color.white};
    width: 100%;
`;
const LoginSection = styled.section`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
`;
const LoginButton = styled.button`
    border: none;
    padding: 4px 8px;
    border-radius: 8px;
    margin-left: 0px;
    background-color: black;
    color: ${({theme}) => theme.color.white};
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.color.green};
    }
`;
const LogoSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Logo = styled.img`
    height: 160px;
    cursor: pointer;
`;
const NavSearchSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;
const Nav = styled.nav`
    display: flex;
    list-style-type: none;
    padding: 0px;
`;
const NavButton = styled.li`
    color: ${({theme}) => theme.color.white};
    width: 100px;
    height: 40px;
    margin-top: 16px;
    text-align: center;
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.color.green};
        font-size: 20px;
    }
`;
const SearchSection = styled.section`
    position: absolute;
    right: 16px;
    margin-bottom: 4px;
    border-bottom: 1px solid white;
    padding: 0px 2px 6px 2px;
`;
const SearchInput = styled.input`
    width: 100px;
    background-color: black;
    border: none;
    color: ${({theme}) => theme.color.white};
    margin-left: 8px;
    &:focus {
        outline: none;
        caret-color: ${({theme}) => theme.color.white};
        width: 140px;
    }
`;

export default NavBar;