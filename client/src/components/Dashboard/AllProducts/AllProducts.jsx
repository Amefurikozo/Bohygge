import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	deleteProduct,
	filteredProducts,
	getProducts,
} from '../../../redux/productRedux'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { publicRequest } from '../../Utils'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const SearchInput = styled.input`
	width: 150px;
	padding: 5px;
	align-self: center;
	margin-top: 20px;
`

const FieldTitles = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	width: 1320px;
	margin: auto;
	margin-top: 20px;
	> * {
		width: 200px;
		padding: 10px;
		font-weight: bold;
		font-size: 20px;
		background-color: #000000;
		color: white;
		text-transform: uppercase;
		text-align: center;
	}
	@media (max-width: 1050px) {
		> :not(:nth-child(1), :nth-child(3), :nth-child(6)) {
			display: none;
		}
		> * {
			width: 130px;
		}
		width: fit-content;
		padding: 0px;
	}
	@media (max-width: 390px) {
		> :not(:nth-child(1), :nth-child(3), :nth-child(6)) {
			display: none;
		}
		> * {
			width: 115px;
		}
		width: fit-content;
		padding: 0px;
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
		width: 200px;
		padding: 10px;
		min-height: 40px;
		height: fit-content;
		word-wrap: break-word;
		text-align: center;
	}
	@media (max-width: 1050px) {
		> :not(:nth-child(1), :nth-child(3), :nth-child(6)) {
			display: none;
		}
		> * {
			width: 130px;
		}
		width: fit-content;
	}
	@media (max-width: 390px) {
		> :not(:nth-child(1), :nth-child(3), :nth-child(6)) {
			display: none;
		}
		> * {
			width: 115px;
		}
		width: fit-content;
		padding: 0px;
	}
`
const ProductImage = styled.img`
	height: 220px;
	object-fit: cover;
	@media (max-width: 1050px) {
		height: 190px;
	}
`
const ProductTitle = styled.div`
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 500;
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
	@media (max-width: 1050px) {
		> * {
			margin: 0px 10px;
		}
	}
`

const Hr = styled.hr`
	background-color: lightgray;
	border: none;
	width: 90vw;
	max-width: 1200px;
	height: 1px;
	margin: 10px auto;
	@media (max-width: 1050px) {
		width: 90vw;
		max-width: 380px;
	}
	@media (max-width: 390px) {
		width: 90vw;
		max-width: 360px;
	}
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

	const filterProducts = async (e) => {
		const value = e.target.value
		filteredProducts(value, dispatch)
	}

	return (
		<>
			<Container>
				<SearchInput
					type="text"
					onChange={filterProducts}
					placeholder="Search by ID"
				/>
				<FieldTitles>
					<Image>Image</Image>
					<Title>Title</Title>
					<Id>ID</Id>
					<Price>Price</Price>
					<Category>Category</Category>
					<Actions>Actions</Actions>
				</FieldTitles>
				<ProductsContainer>
					{products &&
						products.map((product, index) => (
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
