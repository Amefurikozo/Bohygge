import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'
import bohyggeImg from '../../images/candles/candles (4).jpg'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

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
	width: 134px;
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
	return (
		<Container>
			<Wrapper>
				<ImgContainer>
					<Image src={bohyggeImg} />
				</ImgContainer>
				<InfoContainer>
					<Title>smokey wood scented candle</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</Description>
					<SubDescription>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
						earum animi voluptatum nulla, maiores, non similique laboriosam
						beatae ipsam in dicta voluptas porro fuga ex? Aperiam veritatis
						fugit numquam nemo!
					</SubDescription>
					<Price>20€</Price>
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
					<Button>ADD TO CART</Button>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default SingleProduct
