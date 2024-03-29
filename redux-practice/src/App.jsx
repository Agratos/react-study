import { useState } from 'react';
import styld from 'styled-components';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <Wrapper>
            <Count>{count}</Count>
            <IncreasButton>증가</IncreasButton>
        </Wrapper>
    );
}
const Wrapper = styld.div``;
const Count = styld.div``;
const IncreasButton = styld.button``;

export default App;
