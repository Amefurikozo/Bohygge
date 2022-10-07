import styled from 'styled-components'

const Container = styled.div`
	width: 450px;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
const Image = styled.img`
	width: 450px;
	height: 450px;
	object-fit: auto;
`
const ConceptDetailsContainer = styled.div`
	padding: 20px;
	border: 1px solid lightgrey;
	border-top: 0px;
`
const Title = styled.div`
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 10px;
`
const Info = styled.div`
	width: 100%;
	height: fit-content;
`

const ConceptCard = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<ConceptDetailsContainer>
				<Title>{item.title}</Title>
				<Info>{item.info}</Info>
			</ConceptDetailsContainer>
		</Container>
	)
}

export default ConceptCard
