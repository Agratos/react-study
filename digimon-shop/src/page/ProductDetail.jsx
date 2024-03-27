import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const ProductDetail = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductDetail();
    }, [])

    useEffect(() => {
        const container = document.getElementById('container');
        const overlay = document.getElementById('overlay');

        if(container && overlay){
            container?.addEventListener('mousemove', (e) => {
                const x = e.offsetX;
                const y = e.offsetY;
    
                const rotateX = 4/30 * y - 20;
                const rotateY = -1/5 * x + 20;
    
                overlay.style.cssText = `
                    filter: brightness(1.2) opacity(0.8);
                    background-position: ${x/4 + y/4}%;
                    transform: traslateX(40px);
                `;
    
                container.style.cssText = `transform: perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            })
    
            container?.addEventListener('mouseout', () => {
                overlay.style.cssText = `filter: opacity(0)`;
                container.style.cssText = `tranform: perspective(350px) rotateY(0deg) rotateX(0deg)`;
            })
    
        }
    }, [])

    const getProductDetail = async() => {
        const url = `http://localhost:5000/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
    }

    return (
        <Wrapper>
            <Row>
                <Col lg={8}>
                    <Card id={'container'}>
                        <Effect id={'overlay'} />
                        <Image src={product?.img} />
                    </Card>
                </Col>
                <Col lg={4}>
                    <Name>{product?.name}</Name>
                    <Type></Type>
                </Col>
            </Row>
        </Wrapper>
    )
}
const Wrapper = styled(Container)`
    color: ${({theme}) => theme.color.white};
    width: 600px;
`;
const Card = styled.div`
    width: 220px;
    height: 320px;
    transition: all 0.1s;
    cursor: pointer;
    &:hover {
        transition: none;
    }
`;
const Image = styled.img`
    width: 220px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
const Effect = styled.div`
    position: absolute;
    width: 240px;
    height: 188px;
    background: linear-gradient(
        105deg, 
        transparent 40%, 
        rgba(255, 219, 112, 0.8) 45%, 
        rgba(132, 50, 255, 0.6) 50%,
        transparent 54%
    );
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    filter: opacity(0);
`;
const Name = styled.div`
    ${({theme}) => theme.fontFamily.jua};
    color: #efef6d;
    font-size: 48px;
`;
const Type = styled.div``;

export default ProductDetail;