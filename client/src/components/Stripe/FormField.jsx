import styled from 'styled-components'

const FormFieldContainer = styled.div`
	display: -ms-flexbox;
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
	width: 400px;
	padding: 0px 15px;
	@media (max-width: 768px) {
		width: 300px;
		padding: 0px;
	}
`

const Label = styled.label`
	width: 100px;
	padding: 5px 0;
	color: #000000;
	overflow: hidden;
	font-size: 16px;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: none;
`

const Input = styled.input`
	font-size: 16px;
	width: 100%;
	padding: 11px 15px 11px 8px;
	border: 1px solid black;
	border-radius: 5px;
	color: #000000;
	background-color: transparent;
	animation: 1ms void-animation-out;
	&::placeholder {
		color: #b6b6b6;
		font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 500;
	}
	@media (max-width: 768px) {
		&::placeholder {
			font-size: 14px;
		}
	}
`

const FormField = ({ label, type, name, placeholder, required }) => {
	return (
		<FormFieldContainer>
			<Label htmlFor={name}>{label}</Label>
			<Input
				name={name}
				type={type}
				placeholder={placeholder}
				required
				autoComplete="off"
			/>
		</FormFieldContainer>
	)
}

export default FormField
