import styled from 'styled-components'
import loginImage from '../../images/Bohygge/login.jpg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/userRedux'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	height: calc(100vh - 70px);
	overflow: hidden;
	@media (max-width: 768px) {
		height: fit-content;
		flex-direction: column-reverse;
	}
`
// LEFT
const Left = styled.div`
	flex: 1;
	display: flex;
	position: relative;
`
const ImageLogin = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
const AboutUs = styled.div`
	width: 500px;
	height: fit-content;
	background-color: #0000005d;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	padding: 60px;
	@media (max-width: 768px) {
		width: 350px;
		padding: 30px;
	}
`
const Title = styled.h1`
	font-size: 70px;
	color: white;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		font-size: 38px;
	}
`
const SubTitle = styled.h1`
	font-size: 22px;
	color: white;
	margin: 10px 0px;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`
const Description = styled.h5`
	font-size: 14px;
	color: white;
	margin: 10px 0px;
	text-align: justify;
`
const SubDescription = styled.p`
	font-size: 14px;
	color: white;
	text-align: justify;
`

// RIGHT
const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`
const LoginContainer = styled.div`
	width: 500px;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`
const LoginTitle = styled.h1`
	font-size: 70px;
	margin-bottom: 60px;
	@media (max-width: 768px) {
		font-size: 40px;
		margin-bottom: 40px;
	}
`
const InputFields = styled.div`
	display: flex;
	flex-direction: column;
`
const Input = styled.input`
	margin-bottom: 30px;
	padding: 10px;
	width: 220px;
`
const ButtonsContainer = styled.div`
	display: flex;
	margin: 20px 0px;
`
const ButtonLogin = styled.div`
	background-color: #130f0c;
	color: white;
	text-align: center;
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 700;
	padding: 10px;
	width: 110px;
	margin: 0px 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`
const ButtonRegister = styled.div`
	background-color: #412f28;
	color: white;
	text-align: center;
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 700;
	padding: 10px;
	width: 110px;
	margin: 0px 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Error = styled.div`
	color: black;
`

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	let { isFetching, error } = useSelector((state) => state.user)

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, { username, password })
	}

	return (
		<Container>
			<Left>
				<ImageLogin src={loginImage} />
				<AboutUs>
					<Title>Bohygge</Title>
					<SubTitle>Your alternative way of living</SubTitle>
					<Description>
						A Boho-Hygge inspired shop. We help people create their dream room.
						To design or create their own personal and meaningful space, a place
						in which they can relax and enjoy life as it's supposed to.
					</Description>
					<SubDescription>
						From furniture to clothes, to decoration and art. We've got it all.
						Everything we do and offer follows every environmental safety
						protocols. Because we care. For every purchase you make, we ensure
						that 5% of the earnings are being donated for a good cause. To plant
						seeds, clean the sea, and provide back to nature, as nature provides
						to us.
					</SubDescription>
				</AboutUs>
			</Left>
			<Right>
				<LoginContainer>
					<LoginTitle>Login</LoginTitle>
					<InputFields>
						Username
						<Input
							placeholder="Enter your Username."
							onChange={(e) => setUsername(e.target.value)}
						/>
						Password
						<Input
							placeholder="Enter your Password."
							type={'password'}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputFields>
					<ButtonsContainer>
						<ButtonLogin onClick={handleClick} disabled={isFetching}>
							sign in
						</ButtonLogin>
						<Link className="link" to="/register">
							<ButtonRegister>register</ButtonRegister>
						</Link>
					</ButtonsContainer>
					{error && <Error>Something went wrong, please try again.</Error>}
				</LoginContainer>
			</Right>
		</Container>
	)
}

export default Login
