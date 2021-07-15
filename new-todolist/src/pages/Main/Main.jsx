import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TodoBoard } from './components';
import { InputEmptyModal } from '../../components'


const TodoMian = () => {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState('');
  const nextId = useRef(0);
  const [inputEmptyModalIsOpen, setInputEmptyModalIsOpen] = useState(false);

  useEffect(() => { }, [todo])

  const handleChangeInput = (e) => {
    setInputValue(e.target.value.trim());
  }

  const addTodo = () => {
    if (inputValue !== '') {
      setTodo([
        ...todo,
        {
          id: nextId.current,
          text: inputValue
        }
      ])
      nextId.current += 1;
    } else {
      openInputEmptyModal();
    }
  }

  const deleteTodo = (id) => {
    setTodo((todo) => todo.filter((todo) => todo.id !== id));
  }

  const changeTodo = (id, text) => {
    console.log(id);
    console.log(text);
    setTodo((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            id,
            text,
          };
        }
        return todo;
      }),
    );
  }

  const openInputEmptyModal = () => {
    setInputEmptyModalIsOpen(true);
  }

  const cloaseInputEmptyModal = () => {
    setInputEmptyModalIsOpen(false);
  }

  return (
    <Wrapper>
      <Title>TodoList</Title>
      <ResetButton onClick={() => { setTodo([]); nextId.current = 0; }}>초기화</ResetButton>
      <InputBox placeholder="할일을 입력해주세요" onChange={handleChangeInput} />
      <InputButton onClick={addTodo}>저장</InputButton>
      <TodoBoard
        todo={todo}
        deleteTodo={deleteTodo}
        changeTodo={changeTodo}
      />
      <InputEmptyModal isOpen={inputEmptyModalIsOpen} close={cloaseInputEmptyModal} />
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

const ResetButton = styled.button`
  width: 9%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
  border-top-left-radius: 64px;
  border-bottom-left-radius: 64px;
  border: none;
  margin: 8px;
`

const InputBox = styled.input`
  width: 40%;
  height: 64px;
  font-size: 16px;
  background-color: #FFFF99;
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

export default TodoMian;