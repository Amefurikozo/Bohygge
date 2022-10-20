import styled from 'styled-components'
import { conceptsData } from './ConceptsData'
import ConceptCard from './ConceptCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import boho from '../../images/boho5.png'

const Container = styled.div`
	margin: 60px 0px;
	padding: 20px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	@media (max-width: 768px) {
		margin: 10px 0px;
	}
`
const SectionImg = styled.img`
	width: 90px;
	height: 90px;
	margin-left: 0px;
	background-color: white;
	filter: invert(1);
	@media (max-width: 768px) {
		height: 75px;
		width: 75px;
	}
	@media (max-width: 380px) {
		height: 70px;
		width: 70px;
	}
`

const Concepts = () => {
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<SectionTitle title="CONCEPTS" />
				<SectionImg src={boho} alt="" srcset="" />
			</div>
			<Container>
				{conceptsData.map((item) => (
					<ConceptCard item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default Concepts
