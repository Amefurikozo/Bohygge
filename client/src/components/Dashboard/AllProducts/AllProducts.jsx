import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../../../redux/productRedux'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'

const Container = styled.div``
const FieldTitles = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	width: 1320px;
	margin: auto;
	margin-top: 10px;
	> * {
		width: 220px;
		padding: 10px;
		font-weight: bold;
		font-size: 20px;
		background-color: #000000;
		color: white;
		text-transform: uppercase;
		text-align: center;
	}
`
const Image = styled.div``
const Title = styled.div``
const Id = styled.div``
const Price = styled.div``
const Category = styled.div``
const Actions = styled.div``

const ProductsContainer = styled.div``
const ProductFields = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding: 10px;
	width: 1320px;
	margin: auto;
	> * {
		padding: 5px;
		width: 220px;
		padding: 10px;
		min-height: 40px;
		height: fit-content;
		word-wrap: break-word;
		text-align: center;
	}
`
const ProductImage = styled.img`
	height: 220px;
	object-fit: cover;
`
const ProductTitle = styled.div`
	font-size: 12px;
`
const ProductId = styled.div`
	font-size: 13px;
`
const ProductPrice = styled.div``
const ProductCategory = styled.div``
const ProductActions = styled.div`
	> * {
		margin: 0px 15px;
	}
`

const Hr = styled.hr`
	background-color: lightgray;
	border: none;
	width: 1280px;
	height: 1px;
	margin: 10px auto;
`

const AllProducts = () => {
	const dispatch = useDispatch()
	const products = useSelector((state) => state.product.products)

	useEffect(() => {
		getProducts(dispatch)
	}, [dispatch])

	const handleDelete = (id) => {
		deleteProduct(id, dispatch)
	}

	return (
		<>
			<Container>
				<FieldTitles>
					<Image>Image</Image>
					<Title>Title</Title>
					<Id>ID</Id>
					<Price>Price</Price>
					<Category>Category</Category>
					<Actions>Actions</Actions>
				</FieldTitles>
				<ProductsContainer>
					{products.map((product, index) => (
						<div key={product._id}>
							<ProductFields>
								<ProductImage src={product.img}></ProductImage>
								<ProductTitle>{product.title}</ProductTitle>
								<ProductId>{product._id}</ProductId>
								<ProductPrice>{product.price}€</ProductPrice>
								<ProductCategory>
									{product.category.toUpperCase()}
								</ProductCategory>
								<ProductActions>
									<Link className="link" to={'/product/' + product._id}>
										<EditIcon style={{ cursor: 'pointer' }} />
									</Link>
									<DeleteIcon
										style={{ cursor: 'pointer' }}
										onClick={() => handleDelete(product._id)}
									/>
								</ProductActions>
							</ProductFields>
							<Hr />
						</div>
					))}
				</ProductsContainer>
			</Container>
		</>
	)
}

export default AllProducts
