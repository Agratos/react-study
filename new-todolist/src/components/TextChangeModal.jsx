import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '400px',
    height: '288px',
    transform: 'translate(-50%, -50%)',
  },

};

Modal.setAppElement('#root');

export const TextChangeModal = ({ isOpen, close, changeText }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={close}
    style={customStyles}
    contentLabel='Example Modal'>
    <Wrapper>
      <Title>텍스트 수정</Title>
      <TextChangeInputBox onChange={(e) => changeText = e.target.value} />
      <CloseButton onClick={() => close(changeText)}>수정</CloseButton>
    </Wrapper>
  </Modal>

);

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
`

const Title = styled.p`
  font-size: 32px;
`
const TextChangeInputBox = styled.input`
  font-size: 32px;
`;
const CloseButton = styled.button`
  font-size: 32px;
  width: 100px;
  height: 48px;
  margin: auto;
  margin-top: 32px;
  display: block;
`;