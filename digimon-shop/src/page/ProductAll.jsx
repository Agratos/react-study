import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import { productAction } from '../store/action/productAction';
import DigimonCard from '../component/DigimonCard';

const ProductAll = ({ isMobile }) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.list)
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        getProducts();
    }, [query])

    const getProducts = async() => {
        const searchQuery = query.get('q') ?? '';
        dispatch(productAction.getProduct(searchQuery))
    }

    return (
        <Wrapper>
            <Row>
                {productList?.map((item, index) => (
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
    width: 1000px;
`;
const CardWrapper = styled(Col)`
    ${({isMobile}) => isMobile && css`
        margin: auto;
    `}
`;

export default ProductAll;