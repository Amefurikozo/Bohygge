import styled from 'styled-components'
import logo from '../../images/logo.png'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Newsletter from './Newsletter'

const Container = styled.div`
	display: flex;
	padding: 40px;
	background-color: black;
	margin-top: 140px;
	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 10px;
	}
`

// LEFT
const Left = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> * {
		font-size: 14px;
		width: 290px;
		font-weight: 500;
		color: white;
	}
`

const FindUs = styled.div``
const Address = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`
const Phone = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`
const Email = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`

// CENTER
const Center = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 10px;
`
const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`
const Logo = styled.h1`
	font-weight: 500;
	color: white;
`
const About = styled.p`
	text-align: justify;
	font-size: 14px;
	font-weight: 400;
	color: white;
	@media (max-width: 768px) {
		font-size: 13px;
	}
`
const Social = styled.div`
	padding: 20px 0px;
	margin: auto;
	color: white;
`

// RIGHT
const Right = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	justify-content: center;
	@media (max-width: 1000px) {
		display: none;
	}
`
const SiteMap = styled.div`
	text-align: left;
	color: white;
`

const List = styled.ul`
	width: fit-content;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: auto;
	font-weight: 400;
	color: white;
	@media (max-width: 768px) {
		font-size: 13px;
	}
`
const ListItem = styled.li`
	margin-bottom: 5px;
	cursor: pointer;
	height: 22px;
	width: 145px;

	&:hover {
		font-weight: 900;
	}
	@media (max-width: 768px) {
		width: 130px;
		margin-bottom: 2px;
	}
`

const FooterSectionTitle = styled.div`
	margin-bottom: 20px;
	font-weight: 900;
	color: white;
`

const Footer = () => {
	return (
		<Container>
			<Left>
				<FooterSectionTitle>WHERE TO FIND US</FooterSectionTitle>
				<FindUs>
					<Address>
						<LocationOnIcon style={{ marginRight: '10px' }} /> Paradice City 00,
						Zip: 01326, Greece
					</Address>
					<Phone>
						<PhoneIcon style={{ marginRight: '10px' }} /> +00-0000000000
					</Phone>
					<Email>
						<MailOutlineIcon style={{ marginRight: '10px' }} /> bohygge@fakemail
					</Email>
				</FindUs>
				<Newsletter />
			</Left>
			<Center>
				<LogoContainer>
					<Logo>Bohygge</Logo>
					<img
						src={logo}
						alt=""
						style={{ width: '40px', filter: 'invert(1)' }}
					/>
				</LogoContainer>
				<About>
					Active since 1991. We offer an alternative way of living with peace
					and relaxation as our end goal. We've got furniture of all kinds,
					clothes, accessories, decoration that are all made with the utmost
					care and expertise. Some of the finest material are being used to
					ensure the highest quality standards possible. Create your personal
					space, feel the coziness. Unique products, for a unique life and a
					unique you.
				</About>
				<Social>
					<GitHubIcon style={{ fontSize: '34px', marginRight: '5px' }} />
					<LinkedInIcon style={{ fontSize: '35px', marginRight: '5px' }} />
					<FacebookIcon style={{ fontSize: '35px', marginRight: '5px' }} />
					<InstagramIcon style={{ fontSize: '35px', marginRight: '5px' }} />
					<EmailIcon style={{ fontSize: '35px', marginRight: '5px' }} />
				</Social>
			</Center>
			<Right>
				<SiteMap>
					<FooterSectionTitle>SITE MAP</FooterSectionTitle>
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Furniture</ListItem>
						<ListItem>Decor</ListItem>
						<ListItem>Style</ListItem>
						<ListItem>Candles</ListItem>
						<ListItem>Art</ListItem>
						<ListItem>Outdoors</ListItem>
						<ListItem>Cart</ListItem>
					</List>
				</SiteMap>
			</Right>
		</Container>
	)
}

export default Footer
