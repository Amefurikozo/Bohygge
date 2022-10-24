const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const listen = 8000
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const productsRoute = require('./routes/products')
const cartsRoute = require('./routes/carts')
const storeRoute = require('./routes/store')

const stripeRoute = require('./routes/stripe')

const path = require('path')
app.use(express.static(path.join(__dirname + '/public')))

app.use(express.json())
app.use(cors())

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log('Connected to MongoDB'))
	.catch((err) => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/products', productsRoute)
app.use('/api/carts', cartsRoute)
app.use('/api/store', storeRoute)
app.use('/api/checkout', stripeRoute)

app.listen(process.env.PORT || listen, () => {
	console.log(`Server online at port ${listen}`)
})
