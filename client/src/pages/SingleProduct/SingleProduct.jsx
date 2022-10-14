import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import bohyggeImg from '../../images/candles/candles (4).jpg'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { publicRequest } from '../../components/Utils'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'

export let quantityCart

const Container = styled.div``

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`

const ImgContainer = styled.div`
	flex: 1;
`

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`

const Title = styled.h1`
	font-weight: 400;
	font-variant: small-caps;
`

const Description = styled.p`
	width: 700px;
	margin: 25px 0px;
	text-align: justify;
`
const SubDescription = styled.p`
	width: 700px;
	margin: 25px 0px;
	text-align: justify;
`

const Price = styled.span`
	font-weight: 300;
	font-size: 40px;
`

const OptionsContainer = styled.div`
	margin: 40px 0px;
	width: fit-content;
	border: 2px solid black;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`

const Quantity = styled.span`
	width: 40px;
	height: 40px;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`

const IconContainer = styled.div`
	height: 40px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover :nth-child(1) {
		font-size: 30px;
		transition: all 100ms linear;
	}
`

const Button = styled.button`
	width: fit-content;
	height: fit-content;
	margin: 0px;
	padding: 15px;
	border: none;
	background-color: black;
	color: white;
	font-weight: 600;
	cursor: pointer;
	transition: all 300ms linear;
	&:hover {
		border-radius: 25px;
		transition: all 300ms linear;
	}
`

const SingleProduct = () => {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [product, setProduct] = useState({})
	const [quantity, setQuantity] = useState(1)
	const dispatch = useDispatch()

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id)
				setProduct(res.data)
				// console.log(res.data)
			} catch (err) {
				console.log(err.message)
			}
		}
		getProduct()
	}, [id])

	const handleQuantity = (type) => {
		if (type === 'decrease') {
			quantity > 1 && setQuantity(quantity - 1)
		} else {
			setQuantity(quantity + 1)
		}
	}

	useEffect(() => {
		quantityCart = quantity
	}, [quantity])

	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity }))
	}

	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Description>{product.desc}</Description>
					<SubDescription>{product.moreInfo}</SubDescription>
					<Price>{product.price}€</Price>
					<OptionsContainer>
						<QuantityContainer>
							<IconContainer>
								<RemoveIcon onClick={() => handleQuantity('decrease')} />
							</IconContainer>
							<Quantity>{quantity}</Quantity>
							<IconContainer>
								<AddIcon onClick={() => handleQuantity('increase')} />
							</IconContainer>
						</QuantityContainer>
					</OptionsContainer>
					<Button onClick={handleClick}>ADD TO CART</Button>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default SingleProduct
