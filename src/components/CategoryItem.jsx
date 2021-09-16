import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	flex: 1;
	height: 70vh;
	margin: 3px;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({
		height: '30vh',
	})}
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
`;
const Button = styled.button`
	color: gray;
	border: none;
	font-weight: 600;
	font-size: 16px;
	padding: 10px;
	cursor: pointer;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
