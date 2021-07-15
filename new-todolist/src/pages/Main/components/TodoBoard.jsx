import React from 'react';
import styled from 'styled-components';
import { TodoList } from './TodoList';

export const TodoBoard = ({ todo, deleteTodo, changeTodo }) => {

  return(
    <BoardWrapper>
      {todo.map((data) => (
        <TodoList 
          key={data.id}
          id={data.id}
          text={data.text}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
        />
      ))}
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  text-align: center;
`