import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 22px 0 15px 0;
	${mobile({
		flexDirection: 'column',
	})}
`;

const Left = styled.div`
	flex: 1;
	box-sizing: border-box;
	max-width: 380px;
	margin-right: 50px;
	margin-left: 30px;
`;

const Title = styled.h1``;
const Desc = styled.p`
	margin: 15px 0 20px 0;
`;
const Logos = styled.div`
	display: flex;
`;

const Logo = styled.div`
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	margin-right: 20px;
	background-color: #${(props) => props.color};
	cursor: pointer;
`;

const Center = styled.div`
	flex: 1;
	margin-right: 50px;
	${mobile({
		display: 'none',
	})}
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({
		backgroundColor: '#fff8f8',
	})}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;
const Heading = styled.h2`
	margin-bottom: 20px;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Title>Amigos.</Title>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet
					vero quos, ducimus ipsa cum voluptatem voluptates consectetur?
					Accusantium consectetur recusandae soluta, alias possimus sequi
					dolores. Laborum eum maxime placeat neque dolorem.
				</Desc>
				<Logos>
					<Logo color="3B5999">
						<Facebook />
					</Logo>
					<Logo color="E4405F">
						<Instagram />
					</Logo>
					<Logo color="55ACEE">
						<Twitter />
					</Logo>
					<Logo color="E60023">
						<Pinterest />
					</Logo>
				</Logos>
			</Left>
			<Center>
				<Heading>Useful Links</Heading>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Heading>Contact</Heading>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> 622 Dixie Path , South
					Tobinchester 98336
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '10px' }} /> +1 234 56 78
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} /> contact@lama.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
