import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Col, Container, Row } from 'react-bootstrap';

//import { productAction } from '../store/action/productAction';
import { fetchProductDetail } from '../store/slice/productSlice';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); 
    const productDetail = useSelector(state => state.product.detail)
    console.log(productDetail)
    useEffect(() => {
        //dispatch(productAction.getProductDetail(id))
        dispatch(fetchProductDetail(id))
    }, [])

    useEffect(() => {
        const container = document.getElementById('container');
        const overlay = document.getElementById('overlay');

        if(container && overlay){
            container?.addEventListener('mousemove', (e) => {
                const x = e.offsetX;
                const y = e.offsetY;
    
                const rotateX = 4/50 * y - 20;
                const rotateY = -1/6 * x + 20;
    
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

    return (
        <Wrapper>
            <Row>
                <Col>
                    <Card id={'container'}>
                        <Effect id={'overlay'} />
                        <Image src={productDetail?.img} />
                    </Card>
                </Col>
                <Col>
                    <InfoWrapper>
                        <InfoBox>
                            <InfoLabel>이름</InfoLabel>
                            <Info>{productDetail?.name}</Info>
                        </InfoBox>
                        <InfoBox>
                            <InfoLabel>형태</InfoLabel>
                            <Info>{productDetail?.stage}</Info>
                        </InfoBox>
                        <InfoBox>
                            <InfoLabel>속성</InfoLabel>
                            <Info>{productDetail?.property}</Info>
                        </InfoBox>
                        <InfoBox>
                            <InfoLabel>유형</InfoLabel>
                            <Info>{productDetail?.form}</Info>
                        </InfoBox>
                    </InfoWrapper>
                </Col>
            </Row>
            <PurchaseButton>카트 담기</PurchaseButton>
            {/* <PurchaseButton>바로 구매</PurchaseButton> */}
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
    color: ${({theme}) => theme.color.white};
`;
const PurchaseButton = styled.button`
    border: none;
    border-radius: 16px;
    background-color: #b9d2b9;
    font-size: 16px;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        background-color: #8fb2fd;
        border: 1px solid white;
        padding: 9px;
    }
`;

export default ProductDetail;