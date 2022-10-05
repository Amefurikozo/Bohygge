const jwt = require('jsonwebtoken')

const userVerification = (req, res, next) => {
	const authHeader = req.headers.token
	if (!authHeader) {
		return res.status(401).json('Authentication failed')
	} else {
		const token = authHeader.split(' ')[1]
		jwt.verify(token, process.env.JWT_KEY, (err, user) => {
			if (err) {
				res.status(403).json('Verification failed')
			} else {
				req.user = user
				next()
			}
		})
	}
}

module.exports = userVerification
