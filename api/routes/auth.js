const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPass = await bcrypt.hash(req.body.password, salt)

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		})

		const user = await newUser.save()
		res.status(200).json(user)
	} catch (err) {
		res.status(500).json(err)
	}
})

router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username })
		if (!user) {
			return res.status(400).json('Wrong info provided.')
		}

		const validated = await bcrypt.compare(req.body.password, user.password)
		if (!validated) {
			return res.status(400).json('Wrong info provided.')
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_KEY,
			{ expiresIn: '7d' }
		)

		const { password, ...others } = user._doc

		res.status(200).json({ ...others, accessToken })
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
