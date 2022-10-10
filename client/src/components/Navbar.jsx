import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Badge } from '@mui/material'
import logo from '../images/logo.png'

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
	cursor: pointer;
	font-variant: small-caps;
	margin-left: 10px;
	padding: 0px 10px;
	width: fit-content;
	height: 40px;
`

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input></Input>
						<SearchIcon style={{ color: 'gray' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Bohygge</Logo>
					<img src={logo} alt="" style={{ width: '40px' }} />
				</Center>
				<Right>
					<MenuLink>LOGIN</MenuLink>
					<MenuLink>REGISTER</MenuLink>
					<MenuLink>
						<Badge badgeContent={0}>
							<ShoppingBagIcon style={{ fontSize: '30px' }} />
						</Badge>
					</MenuLink>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
