import { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
	@media (max-width: 768px) {
		position: relative;
		justify-content: end;
	}
`

const Filter = styled.div`
	margin: 0px 20px;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		margin: 0px 0px;
		margin-left: 10px;
	}
`

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 700;
	margin-right: 20px;
	@media (max-width: 768px) {
		display: none;
	}
`

const Select = styled.select`
	padding: 10px;
`
const Option = styled.option``

const CategoryProducts = () => {
	const location = useLocation()
	const category = location.pathname.split('/')[2]

	const [categoryList, setCategoryList] = useState()
	const handleCategoryList = (e) => {
		const value = e.target.value.toLowerCase()
		setCategoryList(value)
		window.location.replace(`/products/${value}`)
	}
	const [sortList, setSortList] = useState()
	const handleSortList = (e) => {
		const value = e.target.value
		setSortList(value)
	}

	// console.log(categoryList, sortList)

	return (
		<Container>
			<FilterContainer>
				<Filter>
					<FilterText>FILTER:</FilterText>
					<Select
						name="category"
						onChange={handleCategoryList}
						defaultValue={category.charAt(0).toUpperCase() + category.slice(1)}
					>
						<Option>Furniture</Option>
						<Option>Decor</Option>
						<Option>Clothes</Option>
						<Option>Candles</Option>
						<Option>Art</Option>
						<Option>Outdoors</Option>
						<Option>Popular</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>SORT:</FilterText>
					<Select name="sort" onChange={handleSortList} defaultValue="new">
						<Option value="new">Newest</Option>
						<Option value="old">Oldest</Option>
						<Option value="low">Price (low to high)</Option>
						<Option value="high">Price (high to low)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products
				category={categoryList}
				categoryTitle={category}
				sort={sortList}
			/>
			<Footer />
		</Container>
	)
}

export default CategoryProducts
