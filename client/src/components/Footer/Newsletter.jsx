import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 40px 0px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`
const Title = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
	font-variant: small-caps;
	font-weight: 500;
	margin: auto 0;
	margin-right: 20px;
	@media (max-width: 768px) {
		font-size: 16px;
		margin-right: 12px;
	}
`
const InputContainer = styled.div`
	width: fit-content;
	height: 42px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border-radius: 0px;
	border: 1px solid black;
	border-right: 0px;
`

const Input = styled.input`
	border: none;
	width: 220px;
	padding: 0px 10px;
`

const Button = styled.button`
	border: none;
	width: 50px;
	background-color: #000000;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	border-radius: 0px;
	cursor: pointer;
	&:hover {
		background-color: grey;
	}
`

const Newsletter = () => {
	return (
		<Container>
			<Title>Join our newsletter:</Title>
			<InputContainer>
				<Input placeholder="Enter your email here." />
				<Button>
					<SendIcon />
				</Button>
			</InputContainer>
		</Container>
	)
}

export default Newsletter
