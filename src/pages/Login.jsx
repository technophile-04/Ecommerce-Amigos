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
	width: 25%;
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
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;

	margin: 10px 0;
	padding: 10px;
	font-size: 1.05rem;
`;

const Button = styled.button`
	background-color: teal;
	padding: 15px 20px;
	cursor: pointer;
	color: white;
	border: none;
	width: 40%;
	margin-bottom: 5px;
`;

const Link = styled.a`
	margin: 5px 0px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign In</Title>
				<Form>
					<Input placeholder="Username" />
					<Input placeholder="Password" />
					<Button>Login In</Button>
					<Link>Forgot password ?</Link>
					<Link>Create a new account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
