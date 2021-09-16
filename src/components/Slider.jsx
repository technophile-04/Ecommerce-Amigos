import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({
		display: 'none',
	})}
`;

const Arrow = styled.div`
	border-radius: 50%;
	background-color: #fff7f7;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	position: absolute;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	font-size: 20px;
	font-weight: 500;
	margin: 50px 0;
	letter-spacing: 3px;
`;
const Button = styled.button`
	font-size: 20px;
	padding: 10px;
	background-color: transparent;
	cursor: pointer;
	box-shadow: 3px 4px 4px 1px rgb(0 0 0 / 36%);
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex((slideIndex) =>
				slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1
			);
		} else {
			setSlideIndex((slideIndex) =>
				slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
			);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((slide) => (
					<Slide bg={slide.bg} key={slide.id}>
						<ImgContainer>
							<Image src={slide.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{slide.title}</Title>
							<Desc>{slide.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
