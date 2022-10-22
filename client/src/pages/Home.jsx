import React from 'react'
import CategoryCards from '../components/CategoryCards/CategoryCards'
import Products from '../components/Products/Products'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer/Footer'
import Concepts from '../components/Concepts/Concepts'

const Home = () => {
	return (
		<>
			<Slider />
			<CategoryCards />
			<Products />
			<Concepts />
			<Footer />
		</>
	)
}

export default Home
