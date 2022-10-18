import styled from 'styled-components'
import { conceptsData } from './ConceptsData'
import ConceptCard from './ConceptCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'

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

const Concepts = () => {
	return (
		<>
			<SectionTitle title="CONCEPTS" />
			<Container>
				{conceptsData.map((item) => (
					<ConceptCard item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default Concepts
