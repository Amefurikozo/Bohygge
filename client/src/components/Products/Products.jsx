import styled from 'styled-components'
import { ProductsData } from './ProductsData'
import Product from './Product'
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

const Products = ({ categoryTitle }) => {
	return (
		<>
			<Right>
				<SectionTitle title={categoryTitle || 'Popular'}></SectionTitle>
			</Right>
			<Container>
				{ProductsData.map((item) => (
					<Product item={item} key={item.id} />
				))}
			</Container>
		</>
	)
}

export default Products
