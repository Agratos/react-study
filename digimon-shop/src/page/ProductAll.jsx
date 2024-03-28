import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import DigimonCard from '../component/DigimonCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async() => {
        const url = 'https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products'
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data)
    }

    return (
        <Wrapper>
            <Test>
                {productList.map((item, index) => (
                    <Test2 
                        lg={3} 
                        key={index}
                        className="my-4"
                        sm={9}
                    >
                        <DigimonCard item={item} />
                    </Test2>
                ))}
            </Test>
        </Wrapper>
    )
}
const Wrapper = styled(Container)`
    box-sizing: border-box;
`;
const Test = styled(Row)`
    box-sizing: border-box;
`;
const Test2 = styled(Col)`
    box-sizing: border-box;
`;

export default ProductAll;