const mongoose = require('mongoose')

const CheckoutSchema = new mongoose.Schema(
	{
		user: {
			type: String,
			required: true,
		},
		products: [
			{
				product: {
					type: String,
				},
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
		amount: {
			type: Number,
			required: true,
		},
		address: {
			type: Object,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
		},
		payment: [
			{
				cardNumber: {
					type: Number,
				},
				cardHolder: {
					type: String,
				},
				CCV: {
					type: Number,
				},
				expDate: {
					type: Date,
				},
			},
		],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Checkout', CheckoutSchema)
