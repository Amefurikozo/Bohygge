import styled from 'styled-components'
import registerImage from '../../images/Bohygge/register.jpg'
import { useState } from 'react'
import axios from 'axios'
import { publicRequest } from '../../components/Utils'

const Container = styled.div`
	display: flex;
	height: calc(100vh - 70px);
	overflow: hidden;
`
// LEFT
const Left = styled.div`
	flex: 1;
	display: flex;
	position: relative;
`
const ImageRegister = styled.img`
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
`
const Title = styled.h1`
	font-size: 70px;
	color: white;
	margin-bottom: 10px;
`
const SubTitle = styled.h1`
	font-size: 22px;
	color: white;
	margin: 10px 0px;
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
const RegisterContainer = styled.div`
	width: 500px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`
const RegisterTitle = styled.h1`
	font-size: 70px;
	margin-bottom: 60px;
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
const ButtonRegister = styled.div`
	background-color: #211b0f;
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
const ButtonLogin = styled.div`
	background-color: #b0b0b2;
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

const Register = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(false)
		try {
			const res = await publicRequest.post('/auth/register', {
				username,
				email,
				password,
			})
			res.data && window.location.replace('/login')
		} catch (err) {
			setError(true)
		}
	}
	return (
		<Container>
			<Left>
				<ImageRegister src={registerImage} />
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
				<RegisterContainer>
					<RegisterTitle>Register</RegisterTitle>
					<InputFields>
						Username{' '}
						<Input
							placeholder="Enter your Username."
							onChange={(e) => setUsername(e.target.value)}
						/>
						Email{' '}
						<Input
							placeholder="Enter your Email."
							onChange={(e) => setEmail(e.target.value)}
						/>
						Password{' '}
						<Input
							placeholder="Enter your Password."
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputFields>
					<ButtonsContainer>
						<ButtonRegister onClick={handleSubmit}>sign up</ButtonRegister>
						<ButtonLogin>login</ButtonLogin>
					</ButtonsContainer>
					{error && <Error>Something went wrong, please try again.</Error>}
				</RegisterContainer>
			</Right>
		</Container>
	)
}

export default Register
