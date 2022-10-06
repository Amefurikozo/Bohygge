const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const listen = 8000
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const productsRoute = require('./routes/products')
const cartsRoute = require('./routes/carts')
const storeRoute = require('./routes/store')

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
app.use('/api/products', productsRoute)
app.use('/api/carts', cartsRoute)
app.use('/api/store', storeRoute)

app.listen(process.env.PORT || listen, () => {
	console.log(`Server online at port ${listen}`)
})
