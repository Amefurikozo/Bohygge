import styled from 'styled-components'
import { categoryData } from './categoryData'
import CategoryCard from './CategoryCard'

const Container = styled.div`
	width: 100%;
	height: fit-content;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const CategoryCards = () => {
	return (
		<Container>
			{categoryData.map((item) => (
				<CategoryCard item={item} key={item.id} />
			))}
		</Container>
	)
}

export default CategoryCards
