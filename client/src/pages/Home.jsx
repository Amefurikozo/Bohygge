import React from 'react'
import CategoryCards from '../components/CategoryCards/CategoryCards'
import PopularProducts from '../components/PopularProducts/PopularProducts'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider/Slider'

const Home = () => {
	return (
		<>
			<Navbar />
			<Slider />
			<CategoryCards />
			<PopularProducts />
		</>
	)
}

export default Home
