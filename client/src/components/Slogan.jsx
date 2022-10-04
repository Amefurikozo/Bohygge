import styled from 'styled-components'

const Container = styled.div`
	height: 50px;
	width: 600px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: white;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	position: absolute;
	left: 0;
	right: 0;
	top: 70px;
	margin: auto;
`

const Slogan = () => {
	return (
		<Container>
			Surround yourself with bliss. Embrace the relaxation. Your way of life, is
			you.
		</Container>
	)
}

export default Slogan
