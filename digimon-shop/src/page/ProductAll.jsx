import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
        <Container>
            <Row>
                {productList.map((item, index) => (
                    <Col lg={3} key={index}>
                        <DigimonCard item={item} />
                    </Col>
                ))}
                
            </Row>
        </Container>
    )
}

export default ProductAll;