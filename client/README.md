
# BOHYGGE

A themed eshop with content variating from furniture to clothes and art. With focus on creating a personal space where coziness & relaxation is the priority.

### JUMP TO INFO SECTION ->

[About Styled Components](#styled-components)  
[About Redux](#redux)  
[About Utils](#utils)  
[About Register](#register)  
[About Login](#login)  
[About Stripe](#stripe)  
[ABout Firebase](#firebase)


## CODE INFO / EXPLAINING

### STYLED COMPONENTS

```
- Import styled from styled-components after installing the module
- name a const with a capitalized first letter
- assign to the variable: styled.<insert a tag key>``
- Noticed the `` at the end? Inside those backticks we provide our css
- An example of creating and styling an input field is given below
- &::placeholder is being used to style its placeholder differently
- You can also see a way to implement responsiveness inside the very same component
- You can now use it like so <Input /> or <Input></Input>

______

import styled from 'styled-components'

const Input = styled.input`
	font-size: 16px;
	width: 100%;
	padding: 11px 15px 11px 8px;
	border: 1px solid black;
	border-radius: 5px;
	color: #000000;
	background-color: transparent;
	animation: 1ms void-animation-out;

	&::placeholder {
		color: #b6b6b6;
		font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		&::placeholder {
			font-size: 14px;
		}
	}
`
```

### REDUX

```
file: cartRedux.js

- In order to simplify the Redux Development, i highly suggest learning how to use React Toolkit
  It is a set of tools that helps simplify Redux development.  
  It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.
- Import createSlice from it
- Optionally, you can also import current from Redux toolkit, it can help with checking our state in certain cases
- quantityCart is being imported to check how many items are being added to the cart, and do some math
- createSlice is a function that accepts an initial state, an object of reducer functions, 
  and a "slice name", and automatically generates action creators and action types that 
  correspond to the reducers and state.
- create the Initial state object with the key:value properties you need
- create reducers based on the functionalities that you need, give descriptive names to each case
- export our slice actions and our slice reducer

______

import { createSlice, current } from '@reduxjs/toolkit'
import { quantityCart } from '../pages/SingleProduct/SingleProduct'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += quantityCart
			for (let i = 0; i < quantityCart; i++) {
				if (!state.products.includes(action.payload)) {
					state.products.push(action.payload)
				}
			}
			state.total += action.payload.price * action.payload.quantity
		},
		increaseQuantity: (state, action) => {
			state.products[action.payload].quantity += 1
			state.quantity += 1
			state.total += state.products[action.payload].price
		},
		decreaseQuantity: (state, action) => {
			if (state.products[action.payload].quantity > 1) {
				state.products[action.payload].quantity -= 1
				state.quantity -= 1
				state.total -= state.products[action.payload].price
			}
			// console.log(current(state.products[action.payload]), action.payload)
		},
		removeItem: (state, action) => {
			state.total -=
				state.products[action.payload].price *
				state.products[action.payload].quantity
			state.quantity -= state.products[action.payload].quantity
			state.products.splice(action.payload, 1)
		},
		clearCart: (state, action) => {
			state.products = []
			state.quantity = 0
			state.total = 0
		},
	},
})

export const {
	addProduct,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
	clearCart,
} = cartSlice.actions
export default cartSlice.reducer

```

```
file: store.js

- Import necessities
- combineReducers is being used to use one variable for all the reducers we created & exported
- If we pass the values to the children components without redux-persist, the values will be lost on a refresh/relocation
- Therefore, we make use of persist and configure it
- assign persistReducer() to a variable and include the configuration, plus the combineReducers in it
- create a variable called store and use configureStore to define how and what reducers to pass into our website where needed
- export with the use of perisistStore(<our configured variable here>)


______

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userReducer from './userRedux'
import productReducer from './productRedux'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	product: productReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export let persistor = persistStore(store)


```


```
file: index.js

- For all of the above to work on each and every child component, we have to wrap our App like this, 
  and pass the "store" and "persistor" exports that we have created

______

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)

```

### UTILS

```
file: Utils.jsx

- A file used to define what type of user is allowed to make the request
- We assign our base api url to a variable to avoid retyping it whole each time, during axios requests
- We create two different types of axios requests
- One that only logged in users can use, by checking the users token
- Another that is public, anyone can use it
- the publicRequest is being used for the register page, showcased in the next section.

______

import axios from 'axios'

const BASE_URL = 'https://bohygge.herokuapp.com/api/'
const TOKEN = localStorage.getItem('ACCESS_TOKEN')

// console.log(TOKEN)

export const publicRequest = axios.create({
	baseURL: BASE_URL,
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
})

```

### REGISTER

```
file: Register.jsx

- As you can see, we re not importing axios anymore, we're importing our publicRequest from the Utils file we just talked about
- We dont have a user logged in during the register process & anyone should be able to create an account
- publicRequest followed by post method and the route navigation
- If there's an error, a message will appear, otherwise the login page will appear

______

const Register = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(false)
		try {
			const res = await publicRequest.post('/auth/register', {
				username,
				email,
				password,
			})
			res.data && window.location.replace('/login')
		} catch (err) {
			setError(true)
		}
	}

```

### LOGIN

```
file: Login.jsx

- useSelector allows you to extract data from the Redux store state, using a selector function
- the state is coming from our userRedux.js file, which follows the same principles as the cartRedux.js file
  that we talked about in the REDUX section
- inside cartRedux file, we have exported a <login> named function that we use for the login process
- we dispatch the username and password inside to trigger an axios request
- user validation and local storage for the token is being handled there
- if all went well, the user state changes to the current users data

______

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/userRedux'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	let { isFetching, error } = useSelector((state) => state.user)

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, { username, password })
	}

```
```
small part from file: userRedux.js

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicRequest.post('/auth/login', user)
		localStorage.setItem('ACCESS_TOKEN', res.data.accessToken)
		dispatch(loginSuccess(res.data))
	} catch (err) {
		dispatch(loginFailure())
	}
}

```

### STRIPE

```
file: StripeContainer.jsx

- Import Elements and wrap your form component with it
- Import loadStripe from stripe-js
- Create a variable with your Stripe's publishable key as its value
- If you wonder what that is, create an account at Stripe, stripe will then provide you with 2 keys
- One of the keys should be a secret and known only to you, the other is a publishable key.
- To be able to use it, simply load it with loadStripe
- Pass the promise that we created to Elements
______

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const PUBLISHABLE_KEY = <insert your key here>
const stripePromise = loadStripe(PUBLISHABLE_KEY)

const StripeContainer = () => {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	)
}
```

```
file: PaymentForm.jsx

- Import necessities
- When user submits the form, a billingDetails object is being created with all of the input values
- useStripe is then being used to create our payment method with a type of card
- We also pass all of the user details, both from the CardElement and the billingDetails we collected earlier
- With axios, we make a post request to Stripe with the total amount to pay, and an id
- Stripe is using cents as the format, so the amount of 10 euros should actually be passed as 10 * 100
- If all is good, the state of success becomes true and a message appears to the user
- If all went well, the transaction will be available to check with a success message on your Stripe Account as well
______

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'

export default function PaymentForm() {
	const [success, setSuccess] = useState(false)
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const billingDetails = {
			name: e.target.name.value,
			email: e.target.email.value,
			address: {
				city: e.target.city.value,
				line1: e.target.address.value,
				state: e.target.state.value,
				postal_code: e.target.zip.value,
			},
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
			billing_details: billingDetails,
		})

		if (!error) {
			try {
				const { id } = paymentMethod
				const response = await axios.post(
					'http://localhost:8000/api/checkout/payment',
					{
						amount: cart.total * 100,
						id,
					}
				)

				if (response.data.success) {
					console.log('Successful payment')
					console.log(response.data)
					setSuccess(true)
				}
			} catch (error) {
				console.log('Error', error)
			}
		} else {
			console.log(error.message, billingDetails)
		}
	}
```

### FIREBASE
```
file = addProduct.jsx

- Import necessities and <app> from our firebase initialize configuration
- To get multiple input values in one state, we assign a name value to each input.
  Whenever the input changes, handleChange is being used to set our new object state.
  The key will become e.target.name, and the value e.target.value.
  Use input names equivalent to the schema key property names.
- By submitting our form to add a product in our database, along with an image, the following happens:
  File gets a unique name. Storage is being prepared. By referring to it, we pass the file we want to upload.
  Upload functionality is then being used.
- If the upload is Successful, we then handle the image by fetching the URL of it.
- The URL is then passed into the product variable with img being its key, along with the rest of our inputs.
- addProduct function from productRedux is then being used to make an axios user request, as well as to dispatch our new state.

______

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/productRedux'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import app from './firebase'

export default function AddProduct() {
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [error, setError] = useState(false)

	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleCreate = (e) => {
		e.preventDefault()
		try {
			const fileName = new Date().getTime() + file.name
			const storage = getStorage(app)
			const storageRef = ref(storage, fileName)
			const uploadTask = uploadBytesResumable(storageRef, file)

			setError(false)

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log(progress)
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
						default:
					}
				},
				(error) => {
					setError(true)
					console.log(error.message)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						const product = { ...inputs, img: downloadURL }
						addProduct(product, dispatch)
					})
				}
			)
		} catch (error) {
			setError(true)
		}
	}
```
