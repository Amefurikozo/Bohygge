import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
import BillingDetails from './BillingDetails'
import './style.css'
import { useSelector } from 'react-redux'

const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#000000',
			color: '#000000',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': { color: '#323232' },
			'::placeholder': { color: '#b2b2b2' },
		},
		invalid: {
			iconColor: '#af0000',
			color: '#af0000',
		},
	},
}

export default function PaymentForm() {
	const cart = useSelector((state) => state.cart)

	const [success, setSuccess] = useState(false)
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const billingDetails = {
			name: e.target.name.value,
			email: e.target.email.value,
			address: {
				city: e.target.city.value,
				line1: e.target.address.value,
				state: e.target.state.value,
				postal_code: e.target.zip.value,
			},
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
			billing_details: billingDetails,
		})

		if (!error) {
			try {
				const { id } = paymentMethod
				const response = await axios.post(
					'http://localhost:8000/api/checkout/payment',
					{
						amount: cart.total * 100,
						id,
					}
				)

				if (response.data.success) {
					console.log('Successful payment')
					console.log(response.data)
					setSuccess(true)
				}
			} catch (error) {
				console.log('Error', error)
			}
		} else {
			console.log(error.message, billingDetails)
		}
	}

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit} style={{ marginLeft: '0px' }}>
					<BillingDetails />
					<fieldset className="FormGroup">
						<div className="FormRow">
							<CardElement options={CARD_OPTIONS} />
						</div>
					</fieldset>
					<button>CONFIRM</button>
					<div className="totalPrice">Total Price: {cart.total}€</div>
				</form>
			) : (
				<div className="success">
					<h2>PAYMENT SUCCESSFUL</h2>
				</div>
			)}
		</>
	)
}
