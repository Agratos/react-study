import { Component } from 'react';
import styled from 'styled-components';

import Rulet from './components/Rulet';
import BoxClass from './components/BoxClass';

import rockImg from './assets/rock.png';
import scissorsImg from './assets/scissors.png';
import pagerImg from './assets/paper.png';

class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: null,
            money: 10,
            bet: 1,
            isOpen: false,
            isStart: true
        };
    }

    onClickButton = (userIndex) => {
        const choice = ['rock', 'scissors', 'paper'];
    
        this.setState({ userSelect: choice[userIndex] });
    
        const computerIndex = Math.floor(Math.random() * choice.length);
        const computerChoice = choice[computerIndex];
        this.setState({ computerSelect: computerChoice });
    
        if (userIndex === computerIndex) {
          this.setState({ result: 'draw' });
        } else if (userIndex === (computerIndex + 1) % 3) {
          this.setState((prevState) => ({ result: 'computer', money: prevState.money - prevState.bet }));
        } else {
          this.setState({ result: 'user', isStart: false });
          setTimeout(() => this.setState({ isOpen: true }), 750);
        }
    }
    
    handleMoney = (num) => {
        this.setState((prevState) => ({ money: prevState.money + num }));
    }
    
    resetAll = () => {
        this.setState({ money: 10, bet: 1, result: null, userSelect: null, computerSelect: null });
    }
    
    render() {
        const { userSelect, computerSelect, result, money, bet, isOpen, isStart } = this.state;

        return (
            <Wrapper>
                <Title>도박신고는 1366</Title>
                <ResultWrapper>
                    <Result>{result === null ? null : result === 'draw' ? 'draw' : result === 'user' ? 'win' : 'lose'}</Result>
                    <Result>{result === null ? null : result === 'draw' ? 'draw' : result === 'computer' ? 'win' : 'lose'}</Result>
                </ResultWrapper>
                <BoxWrapper>
                    <BoxClass result={result === 'user' ? 'true' : result === 'computer' ? 'false' : null} select={userSelect} />
                    <BoxClass result={result === 'computer' ? 'true' : result === 'user' ? 'false' : null} select={computerSelect} />
                </BoxWrapper>
                <ButtonWrapper>
                <Button onClick={() => isStart && this.onClickButton(0)}>
                    <img src={rockImg} alt={'rockImg'} />
                </Button>
                <Button onClick={() => isStart && this.onClickButton(1)}>
                    <img src={scissorsImg} alt={'scissorsImg'} />
                </Button>
                <Button onClick={() => isStart && this.onClickButton(2)}>
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
                        onChange={(e) => this.setState({ bet: e.target.value > money ? money : e.target.value < 1 ? 1 : e.target.value })}
                    />
                    <WonText>만</WonText>
                    <Lable>배팅 머니</Lable>
                </BetBox>
                </MoneyWrapper>
                {isOpen && <Rulet bet={bet} setIsOpen={(val) => this.setState({ isOpen: val })} setIsStart={(val) => this.setState({ isStart: val })} handleMoney={this.handleMoney} />}
                {money < 1 &&
                    <StopMessage>
                        {'< 파산 > \n 도박신고는 1366'}
                        <ResetButton onClick={this.resetAll}>재시작</ResetButton>
                    </StopMessage>
                }
            </Wrapper> 
        )
    }
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

export default AppClass;
