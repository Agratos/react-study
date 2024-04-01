import React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fillStar, faMinus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar  } from '@fortawesome/free-regular-svg-icons';

const ContactItem = ({ id, name, phone, email, image, favorit }) => {
    const dispatch = useDispatch();

    const deleteContact = () => {
        dispatch({type: 'REMOVE_CONTACT', payload: {id}})
    }

    const changeFavorit = (value) => {
        dispatch({type: 'CHANGE_CONTACT', payload: {id, favorit: value}});
    }
    
    return (
        <Wrapper>
            {image ? 
                <Image src={image ? URL.createObjectURL(image) : 'asset/unkown.png'} /> 
                : 
                <IconWrapper>
                    <FontAwesomeIcon icon={faUser} /> 
                </IconWrapper>
            }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
    margin: auto 8px;   
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
    padding: 6px 10px 10px 0;
`;
const Button = styled.button`
    border: none;
    background-color: inherit;
    font-size: ${({size}) => size ? size : '24px'};
`;
const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
    margin: auto 8px;
    font-size: 40px;
`;


export default ContactItem