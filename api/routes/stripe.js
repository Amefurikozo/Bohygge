const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: 'EUR',
			description: 'Bohygge',
			payment_method: id,
			confirm: true,
		})
		console.log('Payment', payment)
		res.json({
			message: 'Payment successful',
			success: true,
		})
	} catch (error) {
		console.log('Error', error)
		res.json({
			message: 'Payment failed',
			success: false,
		})
	}
})

module.exports = router
