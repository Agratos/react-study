import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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

    const logout = () => {
        dispatch({type:'LOGIN', payload: { id: '', password: ''}});
    }

    const changeNumber = (e) => {
        dispatch({type: 'SETNUM', payload: { num: e.target.value }})
    }

    return (
        <Wrapper>
            <LoginSection>
                <TextWrapper>
                    <Text>아이디</Text>
                    <Text>{id}</Text>
                </TextWrapper>
                <TextWrapper>
                    <Text>비밀번호</Text>
                    <Text>{password}</Text>
                </TextWrapper>
                <ButtonWrapper>
                    <LoginButton onClick={login}>로그인</LoginButton>
                    <LoginButton onClick={logout}>로그아웃</LoginButton>
                </ButtonWrapper>
            </LoginSection>
            <CounterWrapper>
                <TextWrapper>
                    <Text>Count: </Text>
                    <Text>{count}</Text>
                </TextWrapper>
                <InputWrapper>
                    <Input 
                        type='number'
                        defaultValue={num}
                        onChange={(e) => changeNumber(e)}
                    />
                    <IncreasButton onClick={increase}>증가</IncreasButton>
                    <DecreasButton onClick={decrease}>감소</DecreasButton>
                </InputWrapper>
            </CounterWrapper>
            <CounterWrapper>
                <Box />
            </CounterWrapper>
            <CounterWrapper>
                <GrandSonBox />
            </CounterWrapper>  
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const LoginSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 4px;
    width: 240px;
    padding: 4px 16px;
`;
const TextWrapper = styled.div`
    display: flex;
    width: 100%;
`;
const Text = styled.div`
    flex: 1;
`;
const ButtonWrapper = styled.div`
    margin-top: 8px;
`;
const LoginButton = styled.button`
    border: none;
    border-radius: 4px;
    margin: 4px;
    padding: 4px 16px;
`;
const CounterWrapper = styled(LoginSection)`
    margin-top: 24px;
`;
const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`;
const Input = styled.input`
    width: 100px;
    height: 20px;
`;
const IncreasButton = styled(LoginButton)`
    padding: 4px 8px;
`;
const DecreasButton = styled(IncreasButton)``;



export default App;
