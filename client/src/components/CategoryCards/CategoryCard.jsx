import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	width: fit-content;
	margin: 10px 10px;
	height: 500px;
	position: relative;
	display: flex;
	cursor: pointer;
	@media (max-width: 768px) {
		height: 330px;
	}
`
const Image = styled.img`
	width: 500px;
	height: 100%;
	object-fit: cover;
	@media (max-width: 768px) {
		width: 330px;
	}
`
const Title = styled.h1`
	color: white;
	text-shadow: 0px 2px 4px black;
	text-align: center;
	transition: all 300ms;
	@media (max-width: 768px) {
		font-size: 24px;
	}
`
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #00000011;
	transition: all 300ms;
	&:hover {
		background-color: #00000055;
		transition: all 300ms;
	}
	&:hover ${Title} {
		font-size: 36px;
		transition: all 300ms;
	}
	@media (max-width: 768px) {
		&:hover ${Title} {
			font-size: 28px;
			transition: all 300ms;
		}
	}
`

const CategoryCard = ({ item }) => {
	return (
		<Container>
			<Link to={`/products/${item.category}`}>
				<Image src={item.img} />
				<Info>
					<Title>{item.title}</Title>
				</Info>
			</Link>
		</Container>
	)
}

export default CategoryCard
