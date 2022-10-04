import styled from 'styled-components'
import { popularProductsData } from './popularProductsData'
import PopularProduct from './PopularProduct'

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const PopularProducts = () => {
	return (
		<>
			<Container>
				{popularProductsData.map((item) => (
					<PopularProduct item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default PopularProducts
