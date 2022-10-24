import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Badge } from '@mui/material'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/userRedux'
import { clearCart } from '../redux/cartRedux'
import MenuIcon from '@mui/icons-material/Menu'

const Container = styled.div`
	height: 70px;
	margin: 0px 5px;
`
const Wrapper = styled.div`
	height: 70px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		padding: 13px 0px;
	}
`

// LEFT
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`
const Language = styled.div`
	font-size: 16px;
	display: none;
`
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	border-radius: 0px;
	/* display: flex; */
	align-items: center;
	margin-left: 25px;
	display: none;
`
const Input = styled.input`
	padding: 5px;
	border: none;
`
const MenuLinkAdmin = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-variant: small-caps;
	margin-left: 10px;
	padding: 0px 10px;
	width: fit-content;
	height: 40px;
	@media (max-width: 768px) {
		font-size: 12px;
	}
`

// CENTER
const Center = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Logo = styled.h1`
	font-weight: 400;
	@media (max-width: 768px) {
		font-size: 18px;
		display: none;
	}
`

// RIGHT
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: end;
`
const MenuLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-variant: small-caps;
	margin-left: 10px;
	padding: 0px 10px;
	width: fit-content;
	height: 40px;
	@media (max-width: 768px) {
		font-size: 12px;
	}
`
const StyledUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #000;
	z-index: 100;
	> :not(:nth-child(2)) {
		cursor: pointer;
	}
`

const StyledLi = styled.li`
	float: left;
	cursor: default;
`

const Dropbtn = styled.div`
	display: flex;
	color: white;
	text-align: center;
	padding: 10px 10px;
	text-decoration: none;
`

const DropDownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`

const DropDownLi = styled(StyledLi)`
	display: inline-block;
	&:hover {
		background-color: #565656;
	}
	&:hover ${DropDownContent} {
		display: block;
	}
`

/* 
const StyledA = styled.a`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	&:hover {
		background-color: #565656;
	}
`
*/

const SubA = styled.a`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: left;
	cursor: pointer;
	&:hover {
		background-color: #eaeaea;
	}
`

const Navbar = () => {
	const cart = useSelector((state) => state.cart)
	const user = useSelector((state) => state.user.currentUser) || {}
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(logout())
		dispatch(clearCart())
	}

	const handleClick = (type) => {
		switch (type) {
			case 'Link1':
				window.location.replace('/products/furniture')
				break
			case 'Link2':
				window.location.replace('/products/clothes')
				break
			case 'Link3':
				window.location.replace('/products/decor')
				break
			case 'Link4':
				window.location.replace('/products/candles')
				break
			case 'Link5':
				window.location.replace('/products/art')
				break
			case 'Link6':
				window.location.replace('/products/outdoors')
				break
			case 'Link7':
				window.location.replace('/products/popular')
				break
			default:
				type = 'Home'
		}
	}

	return (
		<Container>
			<Wrapper>
				<Left>
					<StyledUl>
						<DropDownLi>
							<Dropbtn>
								<MenuIcon />
							</Dropbtn>
							<DropDownContent>
								<SubA onClick={() => handleClick('Link1')}>Furniture</SubA>
								<SubA onClick={() => handleClick('Link2')}>Clothes</SubA>
								<SubA onClick={() => handleClick('Link3')}>Decor</SubA>
								<SubA onClick={() => handleClick('Link4')}>Candles</SubA>
								<SubA onClick={() => handleClick('Link5')}>Art</SubA>
								<SubA onClick={() => handleClick('Link6')}>Outdoors</SubA>
								<SubA onClick={() => handleClick('Link7')}>Popular</SubA>
								{/* <SubA onClick={() => handleClick('Link8')}>About Us</SubA>
								<SubA onClick={() => handleClick('Link8')}>Contact</SubA> */}
							</DropDownContent>
						</DropDownLi>
					</StyledUl>
					{user.username === 'admin' && (
						<MenuLinkAdmin>
							<Link className="link" to="/dashboard">
								DASHBOARD
							</Link>
						</MenuLinkAdmin>
					)}
					<Language>EN</Language>
					<SearchContainer>
						<Input></Input>
						<SearchIcon style={{ color: 'gray' }} />
					</SearchContainer>
				</Left>
				<Link className="link" to="/">
					<Center>
						<Logo>Bohygge</Logo>
						<img src={logo} alt="" style={{ width: '40px' }} />
					</Center>
				</Link>
				<Right>
					{user.username ? (
						<MenuLink>
							<Link className="link" to="/" onClick={handleLogout}>
								LOGOUT
							</Link>
						</MenuLink>
					) : (
						<>
							<MenuLink>
								<Link className="link" to="/login">
									LOGIN
								</Link>
							</MenuLink>

							<MenuLink>
								<Link className="link" to="/register">
									REGISTER
								</Link>
							</MenuLink>
						</>
					)}
					<MenuLink>
						<Badge badgeContent={cart.quantity}>
							<Link className="link" to="/cart">
								<ShoppingBagIcon style={{ fontSize: '30px' }} />
							</Link>
						</Badge>
					</MenuLink>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
