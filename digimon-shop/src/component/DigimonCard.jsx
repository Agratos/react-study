import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const DigimonCard = ({ item }) => {
	const navigate = useNavigate();

	const { id, img, name, stage, price, choice, newProduct } = item;

	const handleCardClick = () => {
		navigate(`product/${id}`);
	};

	return item.name ? (
		<Card onClick={handleCardClick}>
			{newProduct && <New src={'../asset/new.png'} />}
			<Img src={img} />
			<ConsumerChoise>{choice ? 'Consumer choise' : ''}</ConsumerChoise>
			<DigimonTitle>
				<DigimonType>{stage}</DigimonType>
				<DigimonName>{name}</DigimonName>
			</DigimonTitle>
			<DigimonPrice>{price}원</DigimonPrice>
		</Card>
	) : (
		<Card />
	);
};
const Card = styled.div`
	color: ${({ theme }) => theme.color.white};
	position: relative;
	width: 195px;
	margin: auto;
	cursor: pointer;
`;
const New = styled.img`
	position: absolute;
	width: 50px;
	right: 0px;
	top: -1px;
`;
const Img = styled.img`
	width: 194px;
`;
const ConsumerChoise = styled.div`
	font-size: 11px;
	height: 16px;
	color: #83deee;
`;
const DigimonTitle = styled.div`
	display: flex;
`;
const DigimonType = styled.div``;
const DigimonName = styled.div`
	margin-left: 10px;
	color: #ebebac;
`;
const DigimonPrice = styled.div``;

export default DigimonCard;
