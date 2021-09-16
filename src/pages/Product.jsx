import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
	display: flex;
	padding: 30px;
	${mobile({
		flexDirection: 'column',
	})}
`;
const ImageContainer = styled.div`
	margin-right: 50px;
`;
const Image = styled.img`
	height: 80vh;
	${mobile({
		height: '50vh',
	})}
`;
const InfoContainer = styled.div`
	max-width: 50%;
	${mobile({
		maxWidth: '100%',
	})}
`;
const Title = styled.h1`
	margin-bottom: 22px;
	font-weight: 300;
	font-size: 40px;
	${mobile({
		textAlign: 'center',
	})}
`;
const Desc = styled.p`
	margin-bottom: 22px;
	font-weight: 200;
	letter-spacing: 1.5px;
	${mobile({
		textAlign: 'center',
	})}
`;
const Price = styled.h4`
	margin-bottom: 22px;
	font-size: 35px;
	font-weight: 20;
	letter-spacing: 3px;
	${mobile({
		textAlign: 'center',
	})}
`;

const FilterContainer = styled.div`
	display: flex;
	width: 50%;
	margin: 30px 0;
	justify-content: space-between;
	${mobile({
		width: '100%',
	})}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	padding: 5px;
	margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
	display: flex;
	width: 50%;
	align-items: center;
	justify-content: space-between;
	${mobile({
		width: '100%',
	})}
`;
const AddContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;
const Button = styled.button`
	padding: 15px;
	background-color: white;
	cursor: pointer;
	border: 1.5px solid teal;
	font-weight: 500;

	&:hover {
		background-color: #f8f4f4;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Anouncement />
			<Wrapper>
				<ImageContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImageContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</Desc>
					<Price>Rs.2000</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color :</FilterTitle>
							<FilterColor color="blue" />
							<FilterColor color="black" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AmountContainer>
						<AddContainer>
							<Add />
							<Amount>1</Amount>
							<Remove />
						</AddContainer>
						<Button>ADD TO CHART</Button>
					</AmountContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
