import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from 'react-bootstrap';
//import { authenicateAction } from '../store/action/authenicateAction';
import { authenicateActions } from '../store/slice/authenicateSlice';

const NavBar = ({ isMobile }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authenticate = useSelector(state => state.auth.authenticate)
    const [navClick, setNavClick] = useState('');
    const [isShow, setIsShow] = useState(false);

    const manueList = [
        '유년기', '성장기', '성숙기', '완전체', '궁극체'
    ]  

    useEffect(() => {
        handleNavClick();
    }, [navClick])

    const handleLogInOut = () => {
        if(authenticate){
            dispatch(authenicateActions.logout())
        } else {
            navigate('login')
        }
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    const handleSearch = (e) => {
        if(e.key === 'Enter'){
            const keyword = e.target.value;

            navigate(`/?q=${keyword}`);
        }
    }

    const handleNavClick = () => {
        navigate(`/?q=${navClick}`);
    }

    const handleClose = () => setIsShow(false);

    const handleShow = () => setIsShow(true);

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
            {isMobile ?
                <SideBarButton>
                    <FontAwesomeIcon icon={faBars} onClick={handleShow} size='2x'/>
                </SideBarButton>
                :
                <NavSearchSection>
                    <Nav>
                        {manueList.map((item, index) => (
                            <NavButton 
                                key={item + index}
                                onClick={() => setNavClick(item)}
                            >{item}</NavButton>
                        ))}
                    </Nav>
                    <SearchSection>
                        <FontAwesomeIcon icon={faSearch} />
                        <SearchInput type={'text'} onKeyPress={(e) => handleSearch(e)}/>
                    </SearchSection>
                </NavSearchSection>
            }
            {isShow && 
                <SideBar show={isShow} onHide={handleClose}>
                    <Nav isMobile={isMobile}>
                        {manueList.map((item, index) => (
                            <NavButton 
                                key={item + index}
                                onClick={() => setNavClick(item)}
                                isMobile={isMobile}
                            >{item}</NavButton>
                        ))}
                    </Nav>
                </SideBar>
            }
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
    ${({isMobile}) => isMobile && css`
        flex-direction: column;
        align-items: center;
        padding-top: 16px;
    `}
`;
const NavButton = styled.li`
    color: ${({theme}) => theme.color.white};
    width: 100px;
    height: 40px;
    margin-top: 16px;
    text-align: center;
    cursor: pointer;
    ${({isMobile}) => isMobile ? 
    css`
        color: black;
        font-size: 30px;
        ${({theme}) => theme.fontFamily.jua}
        margin: 16px ;
        &:hover {
            color: #acac14
        }
    ` :
    css`
        &:hover {
            color: ${({theme}) => theme.color.green};
            font-size: 20px;
        }
    `}
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
const SideBarButton = styled.div`
    position: absolute;
    top: 0;
    margin: 16px;
    cursor: pointer;
    width: 40px;
`;
const SideBar = styled(Offcanvas)`
    max-width: 200px;
    background-color: #c4effbff;
`;

export default NavBar;