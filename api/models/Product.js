const mongoose = require('mongoose')
const { customAlphabet } = require('nanoid')
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
const nanoid = customAlphabet(alphabet, 8)

const ProductSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			default: () => nanoid().toUpperCase(),
		},
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
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
