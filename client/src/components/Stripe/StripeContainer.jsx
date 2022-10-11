import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLISHABLE_KEY =
	'pk_test_51LqSpvDaEewMcyZuCiKdZUVITcPiLVTHEugDApF7QD9HV9rXp1MqWNVwEagmylmVhSXbMBwVmIK8GGGSebMYjQkx00z4hmIrrw'

const stripePromise = loadStripe(PUBLISHABLE_KEY)

const StripeContainer = () => {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	)
}

export default StripeContainer
