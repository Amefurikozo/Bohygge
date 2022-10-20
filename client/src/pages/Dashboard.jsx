import React, { useState } from 'react'
import styled from 'styled-components'
import AddProduct from '../components/Dashboard/AddProduct/AddProduct'
import AllProducts from '../components/Dashboard/AllProducts/AllProducts'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: fit-content;
	height: fit-content;
	margin: auto;
`
//
const AdminButton = styled.button`
	width: 212px;
	background-color: ${(props) => (props.selected ? 'black' : 'white')};
	color: ${(props) => (props.selected ? 'white' : 'black')};
	border: 2px solid black;
	@media (max-width: 1050px) {
		width: 160px;
		font-size: 14px;
		margin: 10px;
		margin-top: 30px;
	}
`
const Left = styled.div``
const Right = styled.div``

const Dashboard = () => {
	const [allProducts, setAllProducts] = useState(true)
	const [newProduct, setNewProduct] = useState(false)

	const handleSelection = (type) => {
		if (type === 'all') {
			setAllProducts(true)
			setNewProduct(false)
		} else {
			setAllProducts(false)
			setNewProduct(true)
		}
	}
	return (
		<>
			<Container>
				<Left>
					<AdminButton
						onClick={() => handleSelection('all')}
						selected={allProducts}
						className="allProductsButton"
					>
						ALL PRODUCTS
					</AdminButton>
				</Left>
				<Right>
					<AdminButton
						onClick={() => handleSelection('new')}
						selected={newProduct}
						className="addProductButton"
					>
						ADD A PRODUCT
					</AdminButton>
				</Right>
			</Container>
			{newProduct ? <AddProduct /> : <AllProducts />}
		</>
	)
}

export default Dashboard
