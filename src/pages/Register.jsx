import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
			center;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({
		width: '75%',
	})}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	font-size: 1.05rem;
`;

const Aggrement = styled.span`
	margin: 20px 0px;
	font-size: 1.05rem;
`;

const Button = styled.button`
	background-color: teal;
	padding: 15px 20px;
	cursor: pointer;
	color: white;
	border: none;
	width: 40%;
	${mobile({
		width: '75%',
	})}
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="Name" />
					<Input placeholder="Last name" />
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Input placeholder="Confirm password" />
					<Aggrement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Aggrement>
					<Button>Create an account</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
