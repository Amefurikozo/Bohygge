import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import ClearIcon from '@mui/icons-material/Clear'
import cartImage1 from '../../images/decor/decor-dreamcatcher.jpg'
import cartImage2 from '../../images/style/style (11).jpg'
import { useState, useEffect } from 'react'
import StripeContainer from '../../components/Stripe/StripeContainer'
import { useSelector } from 'react-redux'

import {
	increaseQuantity,
	decreaseQuantity,
	removeItem,
} from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		width: 330px;
		padding: 10px;
	}
`

const Wrapper = styled.div`
	padding: 20px;
	margin: 30px 0px;
	@media (max-width: 768px) {
		width: 330px;
		padding: 10px;
	}
`

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
	margin-bottom: 60px;
	font-size: 40px;
	@media (max-width: 768px) {
		font-size: 26px;
		font-weight: 300;
		width: fit-content;
		margin-bottom: 30px;
	}
`
const ShoppingInfoContainer = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const Info = styled.div`
	width: fit-content;
`

const Item = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	border-right: 1px solid lightgrey;
	padding-right: 25px;
	@media (max-width: 768px) {
		border: 0px;
	}
`

const ItemDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 200px;
	height: 300px;
	object-fit: cover;
	@media (max-width: 768px) {
		width: 120px;
		height: 200px;
	}
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		width: calc(100vw - 180px);
		padding: 15px;
	}
`

const ItemName = styled.span`
	font-variant: small-caps;
	font-size: 20px;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		margin-top: 15px;
		font-size: 18px;
	}
`
const ItemSectionTitle = styled.div`
	font-variant: normal;
	font-weight: 500;
	margin-right: 10px;
	@media (max-width: 768px) {
		display: none;
	}
`
const Description = styled.p`
	width: 500px;
	margin: 10px 0px;
	font-size: 13px;
	text-align: justify;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		display: none;
	}
`
const ItemID = styled.span`
	display: flex;
	margin: 5px 0px;
	font-size: 12px;
	@media (max-width: 768px) {
		font-size: 10px;
	}
`
const PriceQuantityDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`
const OptionsContainer = styled.div`
	margin: 10px 0px;
	width: fit-content;
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
	@media (max-width: 768px) {
		width: 25px;
		height: 25px;
	}
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
	@media (max-width: 768px) {
		width: 25px;
		height: 25px;
	}
`
const ItemPrice = styled.div`
	width: 130px;
	padding: 5px;
	border-radius: 5px;
	text-align: center;
	background-color: #000000;
	color: white;
	font-size: 30px;
	font-weight: 400;
	font-variant: small-caps;
	@media (max-width: 768px) {
		font-size: 20px;
		width: 90px;
	}
`
const Hr = styled.hr`
	background-color: lightgray;
	border: none;
	height: 1px;
	margin: 20px 0px;
`

const Summary = styled.div`
	width: 400px;
	padding: 20px;
	padding-top: 0px;
	height: fit-content;
	margin: 0px 30px;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		width: 280px;
		padding: 0px;
		margin: 0px;
	}
`
const SummaryTitle = styled.h1`
	font-weight: 200;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		font-size: 24px;
		text-align: left;
		margin-bottom: 20px;
	}
`
const SummaryItem = styled.div`
	margin: 10px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'bold' && '500'};
	font-size: ${(props) => props.type === 'bold' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
	align-self: center;
`

const Cart = () => {
	const cart = useSelector((state) => state.cart)
	// console.log(cart)
	const [showCheckoutForm, setShowCheckoutForm] = useState(false)

	const handleCheckout = () => {
		setShowCheckoutForm(true)
	}

	const dispatch = useDispatch()
	const handleQuantity = (type, index) => {
		if (type === 'decrease') {
			dispatch(decreaseQuantity(index))
		} else {
			dispatch(increaseQuantity(index))
		}
	}

	const handleItemRemoval = (index) => {
		dispatch(removeItem(index))
	}

	return (
		<>
			<Container>
				<Wrapper>
					<Title>YOUR SHOPPING LIST</Title>
					<ShoppingInfoContainer>
						<Info>
							{cart.products.map((product, index) => (
								<div key={index}>
									<Item>
										<ItemDetail>
											<Image src={cartImage1} />
											<Details>
												<ItemName>
													<ItemSectionTitle>Item: </ItemSectionTitle>
													{product.title}
												</ItemName>
												<ItemID>
													<ItemSectionTitle>ID: </ItemSectionTitle>{' '}
													{product._id}
												</ItemID>
												<Description>{product.desc}</Description>
												<PriceQuantityDetails>
													<OptionsContainer>
														<QuantityContainer>
															<IconContainer>
																<RemoveIcon
																	onClick={() =>
																		handleQuantity('decrease', index)
																	}
																/>
															</IconContainer>
															<Quantity>{product.quantity}</Quantity>
															<IconContainer>
																<AddIcon
																	onClick={() =>
																		handleQuantity('increase', index)
																	}
																/>
															</IconContainer>
														</QuantityContainer>
													</OptionsContainer>
													<ItemPrice>
														{product.price * product.quantity}€
													</ItemPrice>
												</PriceQuantityDetails>
											</Details>
										</ItemDetail>
										<ClearIcon
											style={{
												position: 'absolute',
												right: '10px',
												cursor: 'pointer',
											}}
											onClick={() => handleItemRemoval(index)}
										/>
									</Item>
									<Hr />
								</div>
							))}
						</Info>
						{showCheckoutForm ? (
							<StripeContainer />
						) : (
							<Summary>
								<SummaryTitle>ORDER SUMMARY</SummaryTitle>
								<SummaryItem>
									<SummaryItemText>Subtotal</SummaryItemText>
									<SummaryItemPrice>{cart.total}€</SummaryItemPrice>
								</SummaryItem>
								<SummaryItem>
									<SummaryItemText>Discount</SummaryItemText>
									<SummaryItemPrice>0%</SummaryItemPrice>
								</SummaryItem>
								<SummaryItem>
									<SummaryItemText>Estimated Shipping</SummaryItemText>
									<SummaryItemPrice>0€</SummaryItemPrice>
								</SummaryItem>
								<SummaryItem type="bold">
									<SummaryItemText>Total</SummaryItemText>
									<SummaryItemPrice>{cart.total}€</SummaryItemPrice>
								</SummaryItem>
								<Button onClick={handleCheckout}>CHECKOUT NOW</Button>
							</Summary>
						)}
					</ShoppingInfoContainer>
				</Wrapper>
			</Container>
			<Footer />
		</>
	)
}

export default Cart
