import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 40px 0px;
`
const Title = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
	font-variant: small-caps;
	font-weight: 500;
	margin: auto 0;
	margin-right: 20px;
`
const InputContainer = styled.div`
	width: fit-content;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border-radius: 5px;
	border: 1px solid black;
	border-right: 0px;
`

const Input = styled.input`
	border: none;
	width: 200px;
	padding-left: 20px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
`

const Button = styled.button`
	flex: 1;
	border: none;
	width: 50px;
	background-color: #000000;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
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
