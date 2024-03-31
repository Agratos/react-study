import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styld from 'styled-components';

import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';

const App = () => {
    const dispatch = useDispatch();
    const num = useSelector(state => state.num);
    const count = useSelector(state => state.count);
    const id = useSelector(state => state.id);
    const password = useSelector(state => state.password);

    const increase = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const decrease = () => {
        dispatch({ type: 'DECREMENT' });
    }

    const login = () => {
        dispatch({type:'LOGIN', payload: { id: 'agratos', password: '123'}});
    }

    const changeNumber = (e) => {
        dispatch({type: 'SETNUM', payload: { num: e.target.value }})
    }

    return (
        <Wrapper>
            <>{id}, {password}</>
            <Count>{count}</Count>
            <input 
                type='number'
                defaultValue={num}
                onChange={(e) => changeNumber(e)}
            />
            <IncreasButton onClick={increase}>증가</IncreasButton>
            <DecreasButton onClick={decrease}>감소</DecreasButton>
            <LoginButton onClick={login}>로그인</LoginButton>
            <Box />
            <GrandSonBox />
        </Wrapper>
    );
}
const Wrapper = styld.div``;
const Count = styld.div``;
const IncreasButton = styld.button``;
const DecreasButton = styld.button``;
const LoginButton = styld.button``;

export default App;
