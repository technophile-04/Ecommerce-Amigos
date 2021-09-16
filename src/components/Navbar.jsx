import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 60px;

	${mobile({
		height: '50px',
	})}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({
		padding: '10px 0',
	})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 15px;
	cursor: pointer;
	${mobile({
		display: 'none',
	})}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	${mobile({
		marginLeft: '15px',
	})}
`;

const Input = styled.input`
	border: none;
	&:focus {
		outline: none;
	}

	${mobile({
		width: '50px',
	})}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({
		justifyContent: 'center',
		flex: 2,
	})}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({
		fontSize: '14px',
		marginLeft: '15px',
	})}
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({
		fontSize: '24px',
		marginLeft: '5px',
	})}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="search" />
						<Search style={{ color: 'gray', fontSize: '16px' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Amigos.</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;