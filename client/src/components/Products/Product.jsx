import styled from 'styled-components'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'react-router-dom'

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
	border-radius: 20px;
	@media (max-width: 768px) {
		border-radius: 10px;
	}
`

const Container = styled.div`
	margin: 10px 10px;
	width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 20px;
	&:hover ${Info} {
		opacity: 1;
	}
	@media (max-width: 768px) {
		width: 140px;
		height: 175px;
		border-radius: 10px;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	z-index: 2;
	object-fit: cover;
	border-radius: 20px;
	@media (max-width: 768px) {
		width: 140px;
		height: 175px;
		border-radius: 10px;
	}
`

const Price = styled.div`
	position: absolute;
	color: black;
	z-index: 99;
	bottom: 20px;
	width: 80px;
	padding: 5px;
	text-align: center;
	background-color: white;
	border-radius: 5px;
	@media (max-width: 768px) {
		width: 60px;
		padding: 5px;
		font-size: 13px;
	}
`

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 10%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 8px;
	transition: all 0.5s ease;
	&:hover {
		filter: invert(1);
	}
`

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Price>{item.price}€</Price>
			<Info>
				<Icon>
					<ShoppingBagIcon />
				</Icon>
				<Icon>
					<Link className="link" to={`/product/${item._id}`}>
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	)
}

export default Product
