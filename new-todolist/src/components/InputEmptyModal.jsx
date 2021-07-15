import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '400px',
    height: '176px',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const InputEmptyModal = ({ isOpen, close }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={close}
    style={customStyles}
    contentLabel="Example Modal">
    <ContentBox>텍스트를 입력하세요.</ContentBox>
    <CloseButton onClick={close}>닫기</CloseButton>
  </Modal>
);

const ContentBox = styled.p`
  font-size: 32px;
  text-align: center;
`;
const CloseButton = styled.button`
  font-size: 32px;
  width: 100px;
  height: 48px;
  margin: auto;
  margin-top: 32px;
  display: block;
`;