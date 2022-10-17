import { createSlice } from '@reduxjs/toolkit'
import { publicRequest, userRequest } from '../components/Utils'

export const getProducts = async (dispatch) => {
	dispatch(getProductStart())
	try {
		const res = await publicRequest.get('/products')
		dispatch(getProductSuccess(res.data))
	} catch (err) {
		dispatch(getProductFailure())
	}
}

export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart())
	try {
		const res = await publicRequest.delete(`/products/${id}`)
		console.log(res.data)
		dispatch(deleteProductSuccess(id))
	} catch (err) {
		dispatch(deleteProductFailure())
	}
}

export const updateProduct = async (id, product, dispatch) => {
	dispatch(updateProductStart())
	try {
		dispatch(updateProductSuccess({ id, product }))
	} catch (err) {
		dispatch(updateProductFailure())
	}
}
export const addProduct = async (product, dispatch) => {
	dispatch(addProductStart())
	try {
		const res = await userRequest.post(`/products`, product)
		dispatch(addProductSuccess(res.data))
	} catch (err) {
		dispatch(addProductFailure())
	}
}

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//GET ALL
		getProductStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		getProductSuccess: (state, action) => {
			state.isFetching = false
			state.products = action.payload
		},
		getProductFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		//DELETE
		deleteProductStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		deleteProductSuccess: (state, action) => {
			state.isFetching = false
			state.products.splice(
				state.products.findIndex((item) => item._id === action.payload),
				1
			)
		},
		deleteProductFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		//UPDATE
		updateProductStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		updateProductSuccess: (state, action) => {
			state.isFetching = false
			state.products[
				state.products.findIndex((item) => item._id === action.payload.id)
			] = action.payload.product
		},
		updateProductFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		//UPDATE
		addProductStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		addProductSuccess: (state, action) => {
			state.isFetching = false
			state.products.push(action.payload)
		},
		addProductFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const {
	getProductStart,
	getProductSuccess,
	getProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
	addProductStart,
	addProductSuccess,
	addProductFailure,
} = productSlice.actions

export default productSlice.reducer
