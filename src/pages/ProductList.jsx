import React from 'react';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	margin: 20px;
	${mobile({
		margin: '0 0 0 0',
		display: 'flex',
		flexDirection: 'column',
	})}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	${mobile({
		margin: '0 20px',
	})}
`;

const Select = styled.select`
	font-size: 15px;
	padding: 10px;
	margin-left: 17px;
	border: 0.5px solid lightgray;
	&:focus {
		outline: none;
	}
	${mobile({
		margin: '10px 20px',
	})}
`;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Anouncement />
			<Title> Dresses </Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
