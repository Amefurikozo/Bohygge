import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { sliderItems } from './sliderData'
import Slogan from '../Slogan'
import './slider.css'
import Tags from './Tags'

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	display: flex;
	margin-bottom: 70px;
	overflow: hidden;
	@media (max-width: 767px) {
		height: 400px;
		margin-bottom: 40px;
	}
	@media (min-width: 767px) and (max-width: 1100px) {
		height: 500px;
		margin-bottom: 40px;
	}
`

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
`
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
	position: relative;
`
const Img = styled.img`
	width: 75vw;
	height: 100%;
	object-fit: cover;
	@media (max-width: 1480px) {
		width: 72vw;
	}
	@media (max-width: 1400px) {
		width: 100vw;
	}
`
const InfoContainer = styled.div`
	width: 25vw;
	height: 100%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 1480px) {
		width: 28vw;
	}
	@media (max-width: 1400px) {
		display: none;
	}
`
const SideImage = styled.img`
	object-fit: cover;
	width: 300px;
	height: 250px;
	border-radius: 5px;
	margin: auto;
`
const Title = styled.h1`
	font-size: 26px;
	text-align: center;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 700;
	text-transform: uppercase;
`
const Desc = styled.p`
	font-size: 16px;
	font-weight: 400;
	text-align: justify;
	letter-spacing: -1px;
	width: 300px;
	margin: 10px auto;
	margin-bottom: 25px;
`
// const Button = styled.button`
// 	margin-top: 20px;
// 	padding: 10px;
// 	font-size: 20px;
// 	font-variant: small-caps;
// 	background-color: transparent;
// 	cursor: pointer;
// 	width: 200px;
// `

const Arrow = styled.div`
	width: 40px;
	height: 40px;
	background-color: #f7f7f7;
	border-radius: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	cursor: pointer;
	opacity: 0.7;

	left: ${(props) => props.direction === 'left' && '20px'};
	right: ${(props) => props.direction === 'right' && '20px'};

	&:hover {
		opacity: 1;
	}

	@media (max-width: 768px) {
		width: 30px;
		height: 30px;
	}
`

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0)
	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	}

	const [imageTag, setImageTag] = useState(`imageTag${slideIndex}`)
	useEffect(() => {
		setImageTag(`imageTag${slideIndex}`)
		const interval = setInterval(() => {
			handleClick()
		}, 20000)
		return () => clearInterval(interval)
	}, [slideIndex])

	return (
		<Container>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id}>
						<ImgContainer>
							<Arrow direction="left" onClick={() => handleClick('left')}>
								<ArrowBackIcon />
							</Arrow>
							<Img src={item.img} />
							<Arrow direction="right" onClick={() => handleClick('right')}>
								<ArrowForwardIcon />
							</Arrow>
							<Tags imageTag={imageTag} slideIndex={slideIndex} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<SideImage src={item.sideimg1}></SideImage>
							<SideImage src={item.sideimg2}></SideImage>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Slogan />
		</Container>
	)
}

export default Slider
