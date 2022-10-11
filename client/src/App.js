import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register/Register'
import CategoryProducts from './pages/CategoryProducts/CategoryProducts'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Cart from './pages/Cart/Cart'

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<CategoryProducts />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
