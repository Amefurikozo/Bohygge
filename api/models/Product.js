const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		moreInfo: {
			type: String,
			required: false,
		},
		price: {
			type: Number,
			required: true,
		},
		img: {
			type: String,
			required: false,
		},
		category: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)