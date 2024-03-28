import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import DigimonCard from '../component/DigimonCard';

const ProductAll = ({ isMobile }) => {
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
        if (data.length < 4) {
            const newDataLength = 4 - data.length;
            for (let i = 0; i < newDataLength; i++) {
                data.push({}); // 빈 데이터를 추가합니다.
            }
        }
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
                        isMobile={isMobile}
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
    ${({isMobile}) => isMobile && css`
        margin: auto;
    `}
`;

export default ProductAll;