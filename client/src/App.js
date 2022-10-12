import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import CategoryProducts from './pages/CategoryProducts/CategoryProducts'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Cart from './pages/Cart/Cart'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/products/:category" element={<CategoryProducts />} />
					<Route path="/product/:id" element={<SingleProduct />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
