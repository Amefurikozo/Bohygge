import styled from 'styled-components'

const Container = styled.div`
	width: 450px;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 10px;
	@media (max-width: 768px) {
		width: 340px;
	}
`
const Image = styled.img`
	width: 450px;
	height: 450px;
	object-fit: auto;
	@media (max-width: 768px) {
		width: 340px;
		height: 340px;
	}
`
const ConceptDetailsContainer = styled.div`
	padding: 20px;
	border: 1px solid lightgrey;
	border-top: 0px;
	@media (max-width: 768px) {
		padding: 15px;
	}
`
const Title = styled.div`
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		font-size: 18px;
		margin-bottom: 5px;
	}
`
const Info = styled.div`
	width: 100%;
	height: fit-content;
	@media (max-width: 768px) {
		font-size: 14px;
	}
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
