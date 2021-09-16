import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({
		padding: '5px',
	})}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	${mobile({
		padding: '5px',
	})}
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
	display: flex;
	${mobile({
		display: 'none',
	})}
`;
const TopText = styled.span`
	margin: 0 10px;
	cursor: pointer;
	text-decoration: underline;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({
		flexDirection: 'column',
		justifyContent: 'normal',
	})}
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({
		flexDirection: 'column',
		alignItems: 'center',
	})}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
`;
const Detail = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-content: center;
	margin: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 0 5px;
	${mobile({
		margin: '0 15px',
	})}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({
		marginBottom: '7px',
	})}
`;

const Hr = styled.hr`
	background-color: #eee;
	height: 1px;
	border: none;
`;

const Info = styled.div`
	flex: 3;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
	margin-top: 10px;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	font-weight: 600;
	background-color: black;
	color: white;
	padding: 10px;
	margin-top: 8px;
	cursor: pointer;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Anouncement />
			<Wrapper>
				<Title>Your bag</Title>
				<Top>
					<TopButton>Continue Shopping</TopButton>
					<TopTexts>
						<TopText>Shopping bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopButton type="filled">Chekout Now</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
								<Detail>
									<ProductName>
										<b>PRODUCT : </b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID : </b> 939292432
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size : </b> 37.5
									</ProductSize>
								</Detail>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>Rs. 1000</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
								<Detail>
									<ProductName>
										<b>PRODUCT : </b> Hakura gray
									</ProductName>
									<ProductId>
										<b>ID : </b> 939292432
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size : </b> 37.5
									</ProductSize>
								</Detail>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>Rs. 1000</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>Rs. 2000</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Charges</SummaryItemText>
							<SummaryItemPrice>Rs. 500</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>Rs. -500</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>Rs. 2000</SummaryItemPrice>
						</SummaryItem>
						<Button>CHEKCOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;