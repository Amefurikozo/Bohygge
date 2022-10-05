const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const userVerification = require('./userVerification')

// UPDATE ACCOUNT
router.put('/:id', userVerification, async (req, res) => {
	if (req.user.id === req.params.id) {
		const salt = await bcrypt.genSalt(10)
		const hashedPass = await bcrypt.hash(req.body.password, salt)

		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					username: req.body.username,
					email: req.body.email,
					password: hashedPass,
				},
				{ new: true }
			)

			res.status(200).json(updatedUser)
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json('Account update failed.')
	}
})

// DELETE ACCOUNT
router.delete('/:id', userVerification, async (req, res) => {
	if (req.user.id === req.params.id) {
		try {
			const user = await User.findById(req.params.id)
			try {
				await User.findByIdAndDelete(req.params.id)
				res.status(200).json('Account has been deleted. Sad to see you go.')
			} catch (err) {
				res.status(500).json(err)
			}
		} catch (err) {
			res.status(404).json('Account not found!')
		}
	} else {
		res.status(401).json('Account deletion failed.')
	}
})

// GET ACCOUNT DETAILS
router.get('/:id', userVerification, async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const { password, ...others } = user._doc
		res.status(200).json(others)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
