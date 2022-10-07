import styled from 'styled-components'
import { categoryData } from './categoryData'
import CategoryCard from './CategoryCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Container = styled.div`
	width: 100%;
	height: fit-content;
	padding: 20px;
	margin: 60px 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`

const CategoryCards = () => {
	return (
		<>
			<SectionTitle title="CATEGORIES"></SectionTitle>
			<Container>
				{categoryData.map((item) => (
					<CategoryCard item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default CategoryCards
