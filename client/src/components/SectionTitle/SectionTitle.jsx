import styled from 'styled-components'

const SectionTitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90px;
	font-size: 40px;
	width: 350px;
	background-color: black;
	color: white;
	text-align: center;
	text-transform: uppercase;

	@media (max-width: 768px) {
		height: 75px;
		width: 265px;
		font-size: 32px;
	}
	@media (max-width: 380px) {
		height: 70px;
		width: 220px;
		font-size: 26px;
	}
`

export const SectionTitle = ({ title }) => {
	return <SectionTitleContainer>{title}</SectionTitleContainer>
}
