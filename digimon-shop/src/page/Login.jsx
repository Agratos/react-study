import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

//import { authenicateAction } from '../store/action/authenicateAction';
import { authenicateActions } from '../store/slice/authenicateSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
        e.preventDefault();
        //dispatch(authenicateAction.login(id, password));
        dispatch(authenicateActions.login({id, password}));
        navigate('/');
    }

    return (
        <Wrapper>
            <Form onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="ID" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your ID with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    로그인
                </Button>
            </Form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: calc(100% / 1.5);
    color: ${({theme}) => theme.color.darkWhite};
    margin: auto;
`;

export default Login;