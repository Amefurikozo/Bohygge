
# BOHYGGE

A themed eshop with content variating from furniture to clothes and art. With focus on creating a personal space where coziness & relaxation is the priority.

### JUMP TO INFO SECTION ->

[About Dotenv](#dotenv)  
[About Setup](#setup)  
[About Schemas](#schemas)  
[About Routes & Auths](#routes-and-auths)  
[About Stripe](#stripe)  


## CODE INFO / EXPLAINING

### DOTENV

```
file: .env (private)

- After installing the module, create a .env file at the root of your directory and git ignore it
- Inside this file, important information will exist that shouldnt be visible to the keen eye
- In my file, for the api folder, i have included the MONGO_URL, JWT_KEY, STRIPE_KEY variables
- MONGO_URL holds the value of our database url. Our set password is included in the URL, so it should be hidden.
- JWT_KEY holds the value of a random yet strong password I generated.
- STRIPE_KEY holds the value of the secret key that stripe provides us.

______

MONGO_URL = <insert your mongo url here>

JWT_KEY = <insert a value here>

STRIPE_KEY = <insert stripe secret key here>


```

### SETUP

```
file: index.js

- Require necessities
- Mongoose is a library that will help us create object data models. 
- We are creating Schemas with it(explainer in a later section).
  It also provides us with simple data validation is being used to connect to our app to the database.
- Express is a Node.js framework that helps manage servers and routes in a simple manner.
- Cors is a protocol that enables scripts running on a browser client to interact with resources from a different origin.
- Lastly, we require the information that we've just put inside our .env file
- To organize our workspace, we've also created a <routes> folder.
  Inside that folder we've created multiple files based on what the focus of that route should be.
  For example, products CRUD functionalities has nothing to do with user Auths. So, two different route files they'll be.
  We require all of our route files and create a <listen> variable with the port number our app will use locally.
- app.use(express.json()) is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
  for POST and PUT requests, because in both these requests you are sending data to the server.
  We are asking the server to accept or store that data (object), which is enclosed in the body.
- process.env.MONGO_URL(MONGO_URL comes from our .env file) is being used to connect to our database
- app.use("", <route>) is being used to specify the path and the route functionalities for each request
  If we are deleting a product for example, the path should look something like this: <baseurl>/api/products/ 
  along with an delete request being made from either the frontend or REST api.
  The server delete functionality has been written inside productsRoute variable that we made just before.
- For the HEROKU deployment to include both the frontend and the backend together, the proccess i followed is:
  Make a build of the client folder
  Create a <public> named folder inside the api folder
  Copy paste the generated build inside that folder
  When the app gets pushed and runs on the browser, <if> statement returns true and combines the build with our api together
- app.listen has the OR operator( || ). If we re coding locally, the port number from our <listen> variable is being used.
  Otherwise, process.env.PORT is being used automatically

______

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

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('public'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
	})
}

app.listen(process.env.PORT || listen, () => {
	console.log(`Server online at port ${listen}`)
})


```

### SCHEMAS

```
file: user.js

- require mongoose
- follow the Schema creation principles
- the object should include the values needed for our app to work a certain way
- give descriptive names and assign a type, could be a <Number>, an <Array>, anything, depending on the occassion
- use required to showcase that information is needed for the server request to work
- since this schema is used for registration purposes, we cant have more than 1 user use the same credentials
  so, unique set to true on email and username gets that part done
- export the schema to be able to use it in our routes

______

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)

```

### ROUTES AND AUTHS

```
file: auth.js

- The express Router() function is used to create a new router object. 
  This function is used when you want to create a new router object in your program to handle requests.
- bcrypt is a password-hashing function, helps us add a layer of security to an important credential
- JWT, or JSON Web Token, is an open standard used to share information between a client and a server. 
  In most cases, it's an encoded JSON containing a set of claims and a signature.
- User is the variable that will hold our user schema model that we just talked about
- using axios.post in the frontend with the path <baseurl>/api/users/register will trigger the router.post request
  The module will go through a series of rounds to give you a secure hash.
  Here, we define the number of rounds inside bcrypt.genSalt(<number>)
  The higher the number, the more secure our app will be, but also, slower
  The default and suggested to use number is 10.
  We use that salt along with the password we're fetching to encrypt it, before sending it to the database.
- We create a new user object with the values requested, and the hashed password we just made
- For the login process, we are first checking whether such a user exists in our Database
  Then we are using bcrypt.compare to validate the user input password with the hashed one from our Database
  If that went well, the user is logged in. Before that though, the user is also handed an accessToken.
- We are creating an access token with the secret key from our .env file
  This accessToken is going to be checked for any user request made to the server, for validation purposes
- We are desctructuring user._doc to pass all properties except the users password, as we dont want it to return back.
  Only <...others> and <accessToken> can now be seen on our REST api request.
- export our router to be used on our index.js, as shown before.

______

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

```

```
file: userVerification.js

- The code in this file is being used by our user route.
- The user route handles all user request that have nothing to do with the login/register process.
  Requests like delete/edit the users account, or simply to fetch the users details.
- By running the userVerification function inside a route request, our app will make a simple check
  If a token exists in the header, the token verification begins.
  If it fails, the request will not be able to be fulfilled.
  Otherwise, req.user is assigned the user value that passed the verification and next() is being run
  next() will run or execute the code after all the middleware function is finished.
  Meaning, the code inside our users.js operation will procceed next.


______

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

```

```
file: users.js

- Get account details, by running userVerification first.

______

router.get('/:id', userVerification, async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const { password, ...others } = user._doc
		res.status(200).json(others)
	} catch (err) {
		res.status(500).json(err)
	}
})
```

### STRIPE

```
file: stripe.js

- If you followed along what I've written so far, you'll probably understand most of things that is happening here.
- By using our Stripe secret key from our .env file, we creating a payment intent.
  To make the intend work, we first request the total amount and the payment method from our client side.
  If all went well, visiting the Stripe account that is related to the secret key, will showcase a successful transaction.

______

const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: 'EUR',
			description: 'Bohygge',
			payment_method: id,
			confirm: true,
		})
		console.log('Payment', payment)
		res.json({
			message: 'Payment successful',
			success: true,
		})
	} catch (error) {
		console.log('Error', error)
		res.json({
			message: 'Payment failed',
			success: false,
		})
	}
})

module.exports = router
```
