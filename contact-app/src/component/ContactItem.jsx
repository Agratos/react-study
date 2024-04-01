import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fillStar, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faStar  } from '@fortawesome/free-regular-svg-icons';

const ContactItem = ({ name, phone, email, favorit }) => {
    const dispatch = useDispatch();

    const deleteContact = () => {
        dispatch({type: 'REMOVE_CONTACT', payload: {name, phone, email}})
    }

    const changeFavorit = (value) => {
        dispatch({type: 'CHANGE_CONTACT', payload: {name, phone, email, favorit: value}});
    }

    return (
        <Wrapper>
            <Image src={'asset/unkown.png'} />
            <TextWrapper>
                <Text>{name}</Text>
                <Text>{phone}</Text>
            </TextWrapper>
            <ButtonWrapper>
                <Button size={'24px'} onClick={deleteContact}>
                    <FontAwesomeIcon icon={faMinus} /> 
                </Button>
                <Button>
                    {favorit ? 
                        <FontAwesomeIcon icon={fillStar} onClick={() => changeFavorit(false)} /> 
                        : 
                        <FontAwesomeIcon icon={faStar} onClick={() => changeFavorit(true)} />
                    }
                </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #c9c9c9ff;
`;
const Image = styled.img`
    width: 100px;
`;
const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Text = styled.div`
    font-size: 20px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 8px;
`;
const Button = styled.button`
    border: none;
    background-color: inherit;
    font-size: ${({size}) => size ? size : '24px'};
`;


export default ContactItem