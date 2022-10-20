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
