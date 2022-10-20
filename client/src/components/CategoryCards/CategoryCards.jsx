import styled from 'styled-components'
import { categoryData } from './categoryData'
import CategoryCard from './CategoryCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import boho from '../../images/boho2.png'

const Container = styled.div`
	width: 100%;
	height: fit-content;
	padding: 20px;
	margin: 50px 0px;
	display: flex;
	justify-content: center;
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

const CategoryCards = () => {
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<SectionTitle title="CATEGORIES"></SectionTitle>
				<SectionImg src={boho} alt="" srcset="" />
			</div>
			<Container>
				{categoryData.map((item) => (
					<CategoryCard item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default CategoryCards
