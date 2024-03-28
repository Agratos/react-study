import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import DigimonCard from '../component/DigimonCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        getProducts();
    }, [query])

    const getProducts = async() => {
        const searchQuery = query.get('q') ?? '';
        const url = `https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products?q=${searchQuery}`
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
    }

    return (
        <Wrapper>
            <Row>
                {productList.map((item, index) => (
                    <CardWrapper 
                        lg={3} 
                        key={index}
                        className="my-4"
                        sm={9}
                    >
                        <DigimonCard item={item} />
                    </CardWrapper>
                ))}
            </Row>
        </Wrapper>
    )
}
const Wrapper = styled(Container)`
    box-sizing: border-box;
`;
const CardWrapper = styled(Col)`
    margin: auto;
`;

export default ProductAll;