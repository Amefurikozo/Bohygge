import { css } from 'styled-components'
import axios from 'axios'

export const phoneSM = (props) => {
	return css`
		@media only screen and (max-width: 380px) {
			${props}
		}
	`
}

export const phoneLG = (props) => {
	return css`
		@media only screen and (max-width: 576px) {
			${props}
		}
	`
}
export const tabletSM = (props) => {
	return css`
		@media only screen and (max-width: 768px) {
			${props}
		}
	`
}
export const tabletMD = (props) => {
	return css`
		@media only screen and (max-width: 992px) {
			${props}
		}
	`
}
export const tabletLG = (props) => {
	return css`
		@media only screen and (max-width: 1200px) {
			${props}
		}
	`
}
export const pcSM = (props) => {
	return css`
		@media only screen and (max-width: 1600px) {
			${props}
		}
	`
}

export const pcLG = (props) => {
	return css`
		@media only screen and (max-width: 3000px) {
			${props}
		}
	`
}

export const Divider = () => {
	return (
		<div
			style={{
				width: '40px',
				height: '2px',
				backgroundColor: 'black',
				margin: 'auto',
			}}
		></div>
	)
}

const BASE_URL = 'http://localhost:8000/api/'
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2RhYWRjNzRmY2E5MTgyMDgzOWQ5NyIsImlhdCI6MTY2NTY2MTExMiwiZXhwIjoxNjY2MjY1OTEyfQ.VhtAUHewRsro9h_99GRjAGWTa3g6EIGqVt5lNKfFhwo'

export const publicRequest = axios.create({
	baseURL: BASE_URL,
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
})
