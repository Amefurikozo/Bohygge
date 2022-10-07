import styled from 'styled-components'
import { popularProductsData } from './popularProductsData'
import PopularProduct from './PopularProduct'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const Container = styled.div`
	margin: 60px 0px;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`
const Right = styled.div`
	display: flex;
	justify-content: end;
`

const PopularProducts = () => {
	return (
		<>
			<Right>
				<SectionTitle title="Popular"></SectionTitle>
			</Right>
			<Container>
				{popularProductsData.map((item) => (
					<PopularProduct item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default PopularProducts
