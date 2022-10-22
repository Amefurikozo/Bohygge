import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { ProductsData } from './ProductsData'
import Product from './Product'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import axios from 'axios'
import boho from '../../images/boho4.png'

const Container = styled.div`
	margin: 50px 0px;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	@media (max-width: 768px) {
		margin: 10px 0px;
	}
`
const Right = styled.div`
	display: flex;
	justify-content: end;
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

const Products = ({ sort, categoryTitle }) => {
	const [products, setProducts] = useState([])
	const [sortedProducts, setSortedProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					categoryTitle
						? `http://localhost:8000/api/products?category=${categoryTitle}`
						: 'http://localhost:8000/api/products?category=popular'
				)
				setProducts(res.data)
				// console.log('hi')
			} catch (err) {
				console.log(err.message)
			}
		}
		getProducts()
	}, [categoryTitle])

	useEffect(() => {
		setSortedProducts(
			products.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
		)
	}, [products])

	useEffect(() => {
		if (sort === 'new') {
			setSortedProducts((prev) =>
				[...prev].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
			)
		} else if (sort === 'old') {
			setSortedProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
			)
		} else if (sort === 'low') {
			setSortedProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
		} else {
			setSortedProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
		}
	}, [sort])

	// console.log(categoryTitle, sort, sortedProducts)

	return (
		<>
			<Right>
				{!categoryTitle && <SectionImg src={boho} alt="" srcset="" />}
				<SectionTitle title={categoryTitle || 'popular'}></SectionTitle>
			</Right>
			<Container>
				{sortedProducts.map((item, index) => (
					<Product item={item} key={index} />
				))}
			</Container>
		</>
	)
}

export default Products
