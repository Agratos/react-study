import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState();


    const handleSearchButton = () => {
        dispatch({ type: 'SEARCH_NAME', payload: { searchName }})
    }

    const resetButton = () => {
        dispatch({ type: 'SEARCH_NAME', payload: { searchName: '' }});
        setSearchName('');
    }

    return (
        <Row>
            <Col lg={8}>
                <Form.Control 
                    type="text" 
                    placeholder="이름을 입력해주세요" 
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </Col>
            <Col lg={2}>
                <Button variant="primary" type="button" onClick={handleSearchButton}>
                    검색
                </Button>
            </Col> 
            <Col lg={2}>
                <Button variant="primary" type="button" onClick={resetButton}>
                    초기화
                </Button>
            </Col>
        </Row>
    )
}


export default SearchBox