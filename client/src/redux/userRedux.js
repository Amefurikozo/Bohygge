import { createSlice } from '@reduxjs/toolkit'

import { publicRequest } from '../components/Utils'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		loginFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		logout: (state) => {
			state.isFetching = false
			state.currentUser = null
			state.error = false
		},
	},
})

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicRequest.post('/auth/login', user)
		dispatch(loginSuccess(res.data))
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const { loginStart, loginSuccess, loginFailure, logout } =
	userSlice.actions
export default userSlice.reducer
