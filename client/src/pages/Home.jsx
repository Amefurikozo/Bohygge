import React from 'react'
import CategoryCards from '../components/CategoryCards/CategoryCards'
import PopularProducts from '../components/PopularProducts/PopularProducts'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer/Footer'
import Concepts from '../components/Concepts/Concepts'
import { Divider } from '../components/Utils'

const Home = () => {
	return (
		<>
			<Slider />
			<CategoryCards />
			<PopularProducts />
			<Concepts />
			<Divider />
			<Footer />
		</>
	)
}

export default Home
