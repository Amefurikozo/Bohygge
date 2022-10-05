const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
	address: {
		type: Object,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	info: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Store', StoreSchema)
