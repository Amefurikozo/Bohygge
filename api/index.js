const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const listen = 8000
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')

dotenv.config()
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log('Connected to MongoDB'))
	.catch((err) => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)

app.listen(process.env.PORT || listen, () => {
	console.log(`Server online at port ${listen}`)
})
