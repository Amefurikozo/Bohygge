import styled from 'styled-components'
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Link } from 'react-router-dom'

const Container = styled.div`
	margin: 10px 10px;
	width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 20px;

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
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
	background-color: white;
	border-radius: 5px;
	@media (max-width: 768px) {
		width: 60px;
		padding: 5px;
		font-size: 13px;
	}
`

const Product = ({ item }) => {
	return (
		<Link className="link" to={`/product/${item._id}`}>
			<Container>
				<Image src={item.img} />
				<Price>{item.price}€</Price>
			</Container>
		</Link>
	)
}

export default Product
