const Cart = require('../models/Cart')
const userVerification = require('./userVerification')

const router = require('express').Router()

// CREATE A CART LIST
router.post('/', userVerification, async (req, res) => {
	const newCart = new Cart(req.body)

	try {
		const cart = await newCart.save()
		res.status(200).json(cart)
	} catch (err) {
		res.status(500).json(err)
	}
})

// UPDATE YOUR CART LIST
router.put('/:id', userVerification, async (req, res) => {
	console.log(req.user)
	if (req.user.id === req.params.id) {
		try {
			const updatedCart = await Cart.findOneAndUpdate(
				{ user: req.params.id },
				{
					$set: req.body,
				},
				{ new: true }
			)
			res.status(200).json(updatedCart)
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json('Cart update failed.')
	}
})

// DELETE YOUR CART LIST
router.delete('/:id', userVerification, async (req, res) => {
	if (req.user.id === req.params.id) {
		try {
			await Cart.findOneAndDelete({ user: req.params.id })
			res.status(200).json('Cart has been deleted...')
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json('Cart deletion failed.')
	}
})

//GET YOUR CART LIST
router.get('/:id', userVerification, async (req, res) => {
	if (req.user.id === req.params.id) {
		try {
			const cart = await Cart.findOne({ user: req.params.id })
			res.status(200).json(cart)
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json('Cart inquiry failed.')
	}
})

module.exports = router
