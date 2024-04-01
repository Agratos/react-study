import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const ContactFrom = () => {
    const dispatch = useDispatch();
    const idModal = useSelector(state => state.idModal)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({type: 'ADD_CONTACT', payload: { name, phone, email, favorit: false }});
        hideModal();
        reset();
    }

    const reset = () => {
        setName('');
        setPhone('');
        setEmail('');
    }

    const hideModal = () => {
        dispatch({
            type: `IS_MODAL`,
            payload: {
                idModal: false
            }
        })
    }

    return (
        <Modal 
            show={idModal} 
            onHide={hideModal}
            size='sm'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Form onSubmit={(e) => onSubmit(e)}>
                <InputWrrapper>
                    <Label>이름</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </InputWrrapper>
                <InputWrrapper>
                    <Label>번호</Label>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                </InputWrrapper>
                <InputWrrapper>
                    <Label>이메일</Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputWrrapper>
                <Button type='submit'>등록</Button>
            </Form>
        </Modal>
    )
}
const Form = styled.form`
    ${({theme}) => theme.fontFamily.jua};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    background-color: antiquewhite;
    border-radius: 4px;
`;
const InputWrrapper = styled.div`
    width: 100%;
`;
const Label = styled.div`
    width: 100%;
    margin-bottom: 4px;
`;
const Input = styled.input`
    ${({theme}) => theme.fontFamily.apple}
    padding: 4px;
    width: 100%;
    margin-bottom: 16px;
    &:focus {
        outline: none;
    }
`;
const Button = styled.button`
    border: none;
    width: 100%;
    padding: 12px;
    text-align: center;
    margin-top: 8px;
    border-radius: 4px;
    background-color: #76ea61b3;
    &:hover {
        background-color: #e3e316;
    }
`;

export default ContactFrom;