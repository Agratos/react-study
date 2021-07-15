import React, { useState } from 'react';
import styled from 'styled-components';
import { TextChangeModal } from '../../../components'

export const TodoList = ({ id, text, deleteTodo, changeTodo }) => {
  const [textChangeModal, setTextChangeModal] = useState(false);
  const textChange = '';

  const closeTextChangeModal = (changeText) => {
    changeTodo(id, changeText);
    setTextChangeModal(false);
  }

  return (
    <ContentBox>
      {text}
      <DeleteTodoButton onClick={() => deleteTodo(id)} >삭제</DeleteTodoButton>
      <ChageTodoButon onClick={() => setTextChangeModal(true)}>수정</ChageTodoButon>
      <TextChangeModal isOpen={textChangeModal} close={closeTextChangeModal} textChange={textChange} />
    </ContentBox>
  )
}


const ContentBox = styled.div`
  width: 100%;
  height: 136px;
  background-color: rgb(180, 218, 233) ;
  font-size: 64px;
  padding-top: 32px;
  margin-top: 16px;
`

const DeleteTodoButton = styled.button`
  float: right;
  height: 80%;
`

const ChageTodoButon = styled.button`
  float: right;
  height: 80%;
`