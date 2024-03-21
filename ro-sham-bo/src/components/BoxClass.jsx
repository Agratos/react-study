import { Component } from 'react';
import styled from 'styled-components';

class BoxClass extends Component {
    render() {
        const { result, select } = this.props;
        return (
            <Box id='user' result={result}>
                {select && 
                    <img 
                        src={require(`../assets/${select}.png`)} 
                        alt="User's Choice"
                        width={200}
                        height={200}
                    />
                }
            </Box>
        )
    }
}
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 4px solid ${({ result }) => (result === null ? 'black' : result === 'true' ? '#00FF00' : 'red')};
    width: 400px;
    height: 400px;
    margin: 16px;
`;

export default BoxClass;