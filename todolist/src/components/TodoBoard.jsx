import React from 'react';
import styled from 'styled-components';

const TodoBoard = ({ content }) => {
  return(
    <BoardWrapper>
      <ContentBox>{content}</ContentBox>
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  text-align: center;
`

const ContentBox = styled.div`
  width: 100%;
  height: 136px;
  background-color: rgb(180, 218, 233) ;
  font-size: 64px;
  padding-top: 32px;
  margin-top: 16px;
`

export default TodoBoard;