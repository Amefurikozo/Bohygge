import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'

const Container = styled.div`
	margin-top: 40px;
	position: relative;
`

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	height: 90px;
`

const Filter = styled.div`
	margin: 0px 20px;
	display: flex;
	align-items: center;
`

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 700;
	margin-right: 20px;
`

const Select = styled.select`
	padding: 10px;
`
const Option = styled.option``

const CategoryProducts = () => {
	return (
		<Container>
			<FilterContainer>
				<Filter>
					<FilterText>FILTER BY:</FilterText>
					<Select>
						<Option disabled selected>
							Category
						</Option>
						<Option>Furniture</Option>
						<Option>Decor</Option>
						<Option>Clothes</Option>
						<Option>Candles</Option>
						<Option>Art</Option>
						<Option>Outdoors</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>SORT BY:</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Oldest</Option>
						<Option>Price (low to high)</Option>
						<Option>Price (high to low)</Option>
						<Option>Popular</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products categoryTitle="Category" />
			<Footer />
		</Container>
	)
}

export default CategoryProducts
