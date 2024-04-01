import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ContactFrom = () => {
    const dispatch = useDispatch();
    const idModal = useSelector(state => state.idModal)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('010');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const fileInputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({type: 'ADD_CONTACT', payload: { name, phone, email, image, favorit: false }});
        hideModal();
        reset();
    }

    const reset = () => {
        setName('');
        setPhone('010');
        setEmail('');
        setImage('');
    }

    const hideModal = () => {
        dispatch({
            type: `IS_MODAL`,
            payload: {
                idModal: false
            }
        })
    }

    const uploadButton = () => {
        fileInputRef.current.click();
    }

    const handleImage = (e) => {
        if(e.target.files.length !== 0){
            setImage(e.target.files[0])
        }
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
                <ImageUploadWrapper>
                    <ImageUpload 
                        type='file'
                        ref={fileInputRef}
                        onChange={(e) => handleImage(e)}
                    /> 
                    {image === '' ? 
                        <UploadWrapper>
                            <UploadIcon onClick={uploadButton}>
                                <FontAwesomeIcon icon={faPlus} /> 
                                <UploadLabel>Image</UploadLabel>
                            </UploadIcon>
                        </UploadWrapper>
                        : 
                        <ImageWrapper>
                            <Image src={URL.createObjectURL(image)} onClick={uploadButton}/>
                            <UploadLabel onClick={() => setImage('')}>Delete</UploadLabel>
                        </ImageWrapper>
                    }
                </ImageUploadWrapper>
                <InputWrrapper>
                    <Label>이름</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </InputWrrapper>
                <InputWrrapper>
                    <Label>번호</Label>
                    <Input type={'number'} value={phone} onChange={(e) => setPhone(e.target.value)} />
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
    &::-webkit-inner-spin-button,::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
const ImageUploadWrapper = styled.div`
    position: relative;
`;
const UploadWrapper = styled.div``;
const ImageUpload = styled.input`
    display: none;
`;
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
`;
const Image = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: 2px solid black;
    overflow: hidden;
    cursor: pointer;
`;
const Icon = styled.div`
    position: absolute;
    right: -4px;
    top: -8px;
    cursor: pointer;
`;
const UploadIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
`;
const UploadLabel = styled.label`
    position: absolute;
    right: -80px;
    bottom: -4px;
    cursor: pointer;
`;

export default ContactFrom;