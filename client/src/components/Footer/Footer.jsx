import styled from 'styled-components'
import logo from '../../images/logo.png'

const Container = styled.div`
	display: flex;
`

// LEFT
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`

// CENTER
const Center = styled.div`
	flex: 0.5;
	padding: 20px;
`
const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
`
const Logo = styled.h1`
	font-weight: 400;
`
const List = styled.ul`
	width: fit-content;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: auto;
`
const ListItem = styled.li`
	margin-bottom: 5px;
	cursor: pointer;
	height: 22px;
	width: 185px;

	&:hover {
		font-weight: 800;
	}
`

// RIGHT
const Right = styled.div`
	flex: 1;
	padding: 20px;
`

const Footer = () => {
	return (
		<Container>
			<Left></Left>
			<Center>
				<LogoContainer>
					<Logo>Bohygge</Logo>
					<img src={logo} alt="" style={{ width: '40px' }} />
				</LogoContainer>
				<List>
					<ListItem>My Account</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Home</ListItem>
					<ListItem>Furniture</ListItem>
					<ListItem>Decor</ListItem>
					<ListItem>Style</ListItem>
					<ListItem>About Us</ListItem>
				</List>
			</Center>
			<Right></Right>
		</Container>
	)
}

export default Footer
