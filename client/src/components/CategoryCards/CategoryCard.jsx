import styled from 'styled-components'

const Container = styled.div`
	width: fit-content;
	margin: 10px 5px;
	height: 500px;
	position: relative;
	display: flex;
`

const Image = styled.img`
	width: 275px;
	height: 100%;
	object-fit: cover;
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
`

const Title = styled.h2`
	color: white;
	text-shadow: 0px 2px 4px black;
	text-align: center;
`

const CategoryCard = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
			</Info>
		</Container>
	)
}

export default CategoryCard
