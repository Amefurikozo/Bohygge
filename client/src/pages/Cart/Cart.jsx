import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import ClearIcon from '@mui/icons-material/Clear'
import cartImage1 from '../../images/decor/decor-dreamcatcher.jpg'
import cartImage2 from '../../images/style/style (11).jpg'
import { useState } from 'react'
import StripeContainer from '../../components/Stripe/StripeContainer'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Wrapper = styled.div`
	padding: 20px;
	margin: 30px 0px;
`

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
	margin-bottom: 60px;
	font-size: 40px;
`
const ShoppingInfoContainer = styled.div`
	display: flex;
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
`

const ItemDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 200px;
	height: 300px;
	object-fit: cover;
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`

const ItemName = styled.span`
	font-variant: small-caps;
	font-size: 20px;
	display: flex;
`
const ItemSectionTitle = styled.div`
	font-variant: normal;
	font-weight: 500;
	margin-right: 10px;
`
const Description = styled.p`
	width: 500px;
	margin: 10px 0px;
	font-size: 13px;
	text-align: justify;
	margin-bottom: 10px;
`
const ItemID = styled.span`
	display: flex;
	margin: 5px 0px;
	font-size: 12px;
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
	margin-left: 30px;
	display: flex;
	flex-direction: column;
`
const SummaryTitle = styled.h1`
	font-weight: 200;
	margin-bottom: 30px;
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
	const [showCheckoutForm, setShowCheckoutForm] = useState(false)

	const handleCheckout = () => {
		setShowCheckoutForm(true)
	}

	return (
		<Container>
			<Wrapper>
				<Title>YOUR SHOPPING LIST</Title>
				<ShoppingInfoContainer>
					<Info>
						<Item>
							<ItemDetail>
								<Image src={cartImage1} />
								<Details>
									<ItemName>
										<ItemSectionTitle>Item: </ItemSectionTitle> Dreamcatcher
									</ItemName>
									<ItemID>
										<ItemSectionTitle>ID: </ItemSectionTitle> 000
									</ItemID>
									<Description>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec venenatis, dolor in finibus malesuada, lectus ipsum
										porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum
										vestibulum ex, eget tristique tortor pretium ut. Curabitur
										elit justo, consequat id condimentum ac, volutpat ornare.
									</Description>
									<PriceQuantityDetails>
										<OptionsContainer>
											<QuantityContainer>
												<IconContainer>
													<RemoveIcon />
												</IconContainer>
												<Quantity>1</Quantity>
												<IconContainer>
													<AddIcon />
												</IconContainer>
											</QuantityContainer>
										</OptionsContainer>
										<ItemPrice>0€</ItemPrice>
									</PriceQuantityDetails>
								</Details>
							</ItemDetail>
							<ClearIcon
								style={{
									position: 'absolute',
									right: '10px',
									cursos: 'pointer',
								}}
							/>
						</Item>
						<Hr />
						<Item>
							<ItemDetail>
								<Image src={cartImage2} />
								<Details>
									<ItemName>
										<ItemSectionTitle>Item: </ItemSectionTitle> Sweater
									</ItemName>
									<ItemID>
										<ItemSectionTitle>ID: </ItemSectionTitle> 001
									</ItemID>
									<Description>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec venenatis, dolor in finibus malesuada, lectus ipsum
										porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum
										vestibulum ex, eget tristique tortor pretium ut. Curabitur
										elit justo, consequat id condimentum ac, volutpat ornare.
									</Description>
									<PriceQuantityDetails>
										<OptionsContainer>
											<QuantityContainer>
												<IconContainer>
													<RemoveIcon />
												</IconContainer>
												<Quantity>1</Quantity>
												<IconContainer>
													<AddIcon />
												</IconContainer>
											</QuantityContainer>
										</OptionsContainer>
										<ItemPrice>0€</ItemPrice>
									</PriceQuantityDetails>
								</Details>
							</ItemDetail>
							<ClearIcon
								style={{
									position: 'absolute',
									right: '10px',
									cursos: 'pointer',
								}}
							/>
						</Item>
					</Info>
					{showCheckoutForm ? (
						<StripeContainer />
					) : (
						<Summary>
							<SummaryTitle>ORDER SUMMARY</SummaryTitle>
							<SummaryItem>
								<SummaryItemText>Subtotal</SummaryItemText>
								<SummaryItemPrice>0€</SummaryItemPrice>
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
								<SummaryItemPrice>0€</SummaryItemPrice>
							</SummaryItem>
							<Button onClick={handleCheckout}>CHECKOUT NOW</Button>
						</Summary>
					)}
				</ShoppingInfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default Cart
