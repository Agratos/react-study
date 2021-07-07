import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoBard from '../components/TodoBoard';

const Todo = () => {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(todo)
  },[todo])

  const SetTodo = (e) => {
    setTodo([
      ...todo,
      {
        text: inputValue
      }
    ])
  }

  const ChangeInput = (e) => {
    setInputValue(e.target.value);
  }
  
  return(
    <Wrapper>
      <Title>TodoList</Title>
      <InputBox placeholder="할일을 입력해주세요" onChange={ChangeInput} />
      <InputButton onClick={SetTodo}>저장</InputButton>
      {todo.map(( data, index ) => (
        <TodoBard 
          key={index}
          content={data.text}
        />
      ))}

    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`

const Title = styled.p`
  text-align: center;
  font-size: 64px;
  color: skyblue;
`

const InputBox = styled.input`
  width: 40%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
  border-top-left-radius: 64px;
  border-bottom-left-radius: 64px;
  border: none;
  outline: none;
  text-indent: 32px;
`

const InputButton = styled.button`
  width: 9%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
  border-top-right-radius: 64px;
  border-bottom-right-radius: 64px;
  border: none;
  margin: 8px;
`

export default Todo;