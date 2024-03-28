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
        const url = `https://my-json-server.typicode.com/Agratos/react-study/main/digimon-shop/products/?id=${id}`;
        const response = await fetch(url);
        const data = await response.json();

        setProduct(data[0]);
    }

    return (
        <Wrapper>
            <Row>
                <Col>
                    {/* <Name>{product?.name}</Name> */}
                    <Card id={'container'}>
                        <Effect id={'overlay'} />
                        <Image src={product?.img} />
                    </Card>
                </Col>
                <Col>
                    <InfoWrapper>
                        <InfoBox>
                            <InfoLabel>이름</InfoLabel>
                            <Info>아구몬</Info>
                        </InfoBox>
                        <InfoBox>
                            <InfoLabel>형태</InfoLabel>
                            <Info>성장기</Info>
                        </InfoBox>
                        <InfoBox>
                            <InfoLabel>속성</InfoLabel>
                            <Info>백신종</Info>
                        </InfoBox>
                        <InfoBox>
                            <InfoLabel>유형</InfoLabel>
                            <Info>파충류형</Info>
                        </InfoBox>
                    </InfoWrapper>
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
    width: 270px;
    transition: all 2s;
    margin: auto;
    cursor: pointer;
    &:hover {
        transition: all 0.1s;
    }
`;
const Image = styled.img`
    width: 270px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
const Effect = styled.div`
    position: absolute;
    width: 300px;
    height: 220px;
    background: linear-gradient(
        105deg, 
        transparent 40%, 
        rgba(255, 219, 112, 0.8) 45%, 
        rgba(132, 50, 255, 0.6) 50%,
        transparent 50%
    );
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
    filter: opacity(0);
`;
const InfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 40px;
`;
const InfoBox = styled.div`
    ${({theme}) => theme.fontFamily.jua}
    margin-bottom: 24px;
`;
const InfoLabel = styled.div`
    font-size: 20px;
    color: #ebebac;
`;
const Info = styled.div`
    font-size: 32px;
`;

export default ProductDetail;