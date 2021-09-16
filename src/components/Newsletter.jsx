import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fcf1ed;
`;

const Title = styled.h1`
	font-size: 80px;
	margin-bottom: 15px;
	letter-spacing: 3px;
	${mobile({
		fontSize: '60px',
		textAlign: 'center',
	})}
`;
const Desc = styled.p`
	font-size: 22px;
	font-weight: 200;
	letter-spacing: 3px;
	margin-bottom: 20px;
	${mobile({
		textAlign: 'center',
	})}
`;
const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	height: 40px;
	background-color: white;
	justify-content: space-between;
	border: 1px solid lightgray;
	padding-left: 5px;
	${mobile({
		width: '80%',
	})}
`;

const Input = styled.input`
	height: 95%;
	flex: 8;
	border: none;

	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	flex: 1;
	background-color: teal;
	color: white;
	border: none;
	height: 99%;
	cursor: pointer;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favourite products.</Desc>
			<InputContainer>
				<Input placeholder="Your Email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
