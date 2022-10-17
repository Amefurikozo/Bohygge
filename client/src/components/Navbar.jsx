import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Badge } from '@mui/material'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/userRedux'

const Container = styled.div`
	height: 70px;
`
const Wrapper = styled.div`
	height: 70px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
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

// CENTER
const Center = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Logo = styled.h1`
	font-weight: 400;
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
`

const Navbar = () => {
	const cart = useSelector((state) => state.cart)
	const user = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<Container>
			<Wrapper>
				<Left>
					{user.username === 'admin' && (
						<MenuLink>
							<Link className="link" to="/dashboard">
								ADMIN DASHBOARD
							</Link>
						</MenuLink>
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
					{user ? (
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
