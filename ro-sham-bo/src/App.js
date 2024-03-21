import { useState } from 'react';
import styled from 'styled-components';

import Rulet from './components/Rulet';
import BoxClass from './components/BoxClass';

import rockImg from './assets/rock.png';
import scissorsImg from './assets/scissors.png';
import pagerImg from './assets/paper.png';

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [cumputerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);

  const [money, setMoney] = useState(10);
  const [bet, setBet] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isStart, setIsStart] = useState(true);

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
      setMoney((pre) => pre - bet);
    } else {
      setResult('user')
      setIsStart(false);
      setTimeout(() => setIsOpen(true), 750);
    }
  }
  
  const handleMoney = (num) => {
    setMoney((pre) => {
      console.log(pre)
      console.log(num)
      return pre + num
    });
  }

  const resetAll = () => {
    setMoney(10);
    setBet(1);
    setResult(null);
    setUserSelect(null);
    setComputerSelect(null);
  }

  return (
    <Wrapper>
      <Title>도박신고는 1366</Title>
      <ResultWrapper>
        <Result>
          {result === null ? null : result === 'draw' ? 'draw' : result === 'user' ? 'win' : 'lose'}
        </Result>
        <Result>
          {result === null ? null : result === 'draw' ? 'draw' : result === 'cumputer' ? 'win' : 'lose'}
        </Result>
      </ResultWrapper>
      <BoxWrapper>
        <BoxClass 
          result={result === 'user' ? 'true' : result === 'cumputer' ? 'false' : null}
          select={userSelect}
        />
        <BoxClass 
          result={result === 'cumputer' ? 'true' : result === 'user' ? 'false' : null}
          select={cumputerSelect}
        />
        {/* <Box id='user' result={result === 'user' ? 'true' : result === 'cumputer' ? 'false' : null}>
          {userSelect && 
            <img 
              src={require(`./assets/${userSelect}.png`)} 
              alt="User's Choice"
              width={200}
              height={200}
            />
          }
        </Box>
        <Box id='cumputer' result={result === 'cumputer' ? 'true' : result === 'user' ? 'false' : null}>
          {cumputerSelect && 
            <img 
              src={require(`./assets/${cumputerSelect}.png`)} 
              alt="Computer's Choice"
              width={200}
              height={200}
            />
          }
        </Box> */}
      </BoxWrapper>
      <ButtonWrapper>
        <Button onClick={() => isStart && onClickButton(0)}>
          <img src={rockImg} alt={'rockImg'} />
        </Button>
        <Button onClick={() => isStart && onClickButton(1)}>
          <img src={scissorsImg} alt={'scissorsImg'} />
        </Button>
        <Button onClick={() => isStart && onClickButton(2)}>
          <img src={pagerImg} alt={'pagerImg'} />
        </Button>
      </ButtonWrapper>
      <MoneyWrapper>
          <MoneyBox>
              <Lable>보유 머니</Lable>
              <MoneyShow>{money} 만</MoneyShow>
          </MoneyBox>
          <BetBox>
              <BetInput 
                type={'number'}
                value={bet} 
                onChange={ (e) => setBet(e.target.value > money ? money : e.target.value < 1 ? 1 : e.target.value)}
              />
              <WonText>만</WonText>
              <Lable>배팅 머니</Lable>
          </BetBox>
      </MoneyWrapper>
      {isOpen && 
        <Rulet 
          bet={bet}
          setIsOpen={setIsOpen}
          setIsStart={setIsStart}
          handleMoney={handleMoney}
        />
      }
      {money < 1 &&
        <StopMessage>
          {`< 파산 > \n 도박신고는 1366`}
          <ResetButton onClick={resetAll}>재시작</ResetButton>
        </StopMessage>
      }
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
const Title = styled.section`
  position: absolute;
  top: 40px;
  font-size: 30px;
  font-weight: bolder;
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
// const Box = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   border: 4px solid ${({ result }) => (result === null ? 'black' : result === 'true' ? '#00FF00' : 'red')};
//   width: 400px;
//   height: 400px;
//   margin: 16px;
// `;
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
const MoneyWrapper = styled.section`
  display: flex;
  font-size: 24px;
  margin-top: 80px;
`;
const MoneyBox = styled.div`
  display: flex;
  width: 400px;
  margin: 16px;
`;
const BetBox = styled.div`
  display: flex;
  width: 400px;
  justify-content: end;
  align-items: center;
`;
const Lable = styled.label`
  border: 1px solid black;
  border-radius: 8px;
  width: 200px;
  text-align: center;
`;
const MoneyShow = styled.div`
  width: 140px;
  text-align: center;
`;
const BetInput = styled.input`
  width: 70px;
  text-align: right;
  border: none;
  outline: none;
  font-size: 24px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const WonText = styled.label`
  width: 60px;
  margin-left: 10px;
`;
const StopMessage = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-size: 80px;
  font-weight: bolder;
  white-space: pre-line;
  text-align: center;
`;
const ResetButton = styled.button`
  margin-top: 120px;
  width: 200px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  border: none;
  border-radius: 24px;
  background-color: greenyellow;
`;

export default App;
