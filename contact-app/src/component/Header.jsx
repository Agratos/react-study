import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faStar as fillStar } from '@fortawesome/free-solid-svg-icons';
import { faStar  } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    const dispatch = useDispatch();
    const favorit = useSelector(state => state.favorit);
    const [isSearch, setIsSearch] = useState(false);

    const handleFavorit = (value) => {
        dispatch({
            type: `FAVORIT`,
            payload: {
                favorit: value
            }
        })
    }

    const showModal = () => {
        dispatch({
            type: `IS_MODAL`,
            payload: {
                idModal: true
            }
        })
    }

    
    const handleSearch = (searchName) => {
        dispatch({
            type: 'SEARCH_NAME',
            payload: {
                searchName
            }
        })
    }

    return (
        <Wrapper>
            <Logo src={'asset/logo.png'} />
            <Title>주소록</Title>
            <InputWrapper>
                <Input onChange={(e) => handleSearch(e.target.value)} width={isSearch ? '120px' : '0px'} />
                <IconWrapper size='24px' onClick={() => setIsSearch(!isSearch)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </IconWrapper>
            </InputWrapper>
            <IconWrapper size='24px'>
                {favorit ? 
                    <FontAwesomeIcon icon={fillStar} onClick={() => handleFavorit(false)} /> 
                    : 
                    <FontAwesomeIcon icon={faStar} onClick={() => handleFavorit(true)} />
                }
            </IconWrapper>
            <IconWrapper size='26px'>
                <FontAwesomeIcon icon={faPlus} onClick={showModal} />
            </IconWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #76ea61;
    border-bottom: 1px solid black;
    padding: 4px 8px;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const Logo = styled.img`
    width: 50px;
`;
const Title = styled.div`
    font-size: 24px;
    margin-top: 6px;
    margin-left: 8px;
`;
const InputWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`;
const Input = styled.input`
    width: ${({width}) => width};
    border: none;
    border-bottom: 1px solid black;
    background-color: inherit;
    font-size: 20px;
    transition: 1s;
    &:focus {
        outline: none;
    }
    ${({width}) => width === '0px' && css`
        padding: 0;
    `}
`;
const IconWrapper = styled.div`
    font-size: ${({size}) => size};
    margin: 0 8px;
    cursor: pointer;
`;

export default Header