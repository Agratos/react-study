import { useState, useEffect } from 'react';
import styled from 'styled-components';

import rockImg from './assets/rock.png';
import scissorsImg from './assets/scissors.png';
import pagerImg from './assets/paper.png';

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [cumputerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);

  const onClickButton = (userIndex) => {
    const choice = ['rock', 'scissors', 'paper']

    setUserSelect(choice[userIndex]);

    const cumputerIndex = Math.floor(Math.random() * choice.length);
    const computerChoice = choice[cumputerIndex];
    setComputerSelect(computerChoice);

    if(userIndex === cumputerIndex){
      setResult('draw')
    } else if(userIndex === (cumputerIndex + 1)%3 ) {
      setResult('cumputer')
    } else {
      setResult('user')
    }
  }

  return (
    <Wrapper>
      <ResultWrapper>
        <Result>
          {result === null ? null : result === 'draw' ? 'draw' : result === 'user' ? 'win' : 'lose'}
        </Result>
        <Result>
          {result === null ? null : result === 'draw' ? 'draw' : result === 'cumputer' ? 'win' : 'lose'}
        </Result>
      </ResultWrapper>
      <BoxWrapper>
        <Box id='user' result={result === 'user' ? true : result === 'cumputer' ? false : null}>
          {userSelect && 
            <img 
              src={require(`./assets/${userSelect}.png`)} 
              alt="User's Choice"
              width={200}
              height={200}
            />
          }
        </Box>
        <Box id='cumputer' result={result === 'cumputer' ? true : result === 'user' ? false : null}>
          {cumputerSelect && 
            <img 
              src={require(`./assets/${cumputerSelect}.png`)} 
              alt="User's Choice"
              width={200}
              height={200}
            />
          }
        </Box>
      </BoxWrapper>
      <ButtonWrapper>
        <Button onClick={() => onClickButton(0)}>
          <img src={rockImg} />
        </Button>
        <Button onClick={() => onClickButton(1)}>
          <img src={scissorsImg}/>
        </Button>
        <Button onClick={() => onClickButton(2)}>
          <img src={pagerImg}/>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const ResultWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
  width: 864px;
  height: 40px;
`;
const Result = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
`;
const BoxWrapper = styled.section`
  display: flex;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 4px solid ${({ result }) => (result === null ? 'black' : result ? '#00FF00' : 'red')};
  width: 400px;
  height: 400px;
  margin: 16px;
  
`;

const ButtonWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 16px;
  width: 320px;
  height: 120px;
`;
const Button = styled.div`
  cursor: pointer;
`;

export default App;
