import styled from 'styled-components'

const SectionTitleContainer = styled.div`
	padding: 20px;
	font-size: 40px;
	width: 350px;
	background-color: black;
	color: white;
	text-align: center;
	text-transform: uppercase;
	@media (max-width: 768px) {
		width: 320px;
		font-size: 32px;
	}
`

export const SectionTitle = ({ title }) => {
	return <SectionTitleContainer>{title}</SectionTitleContainer>
}
