const router = require('express').Router()
const Product = require('../models/Product')

// CREATE A PRODUCT LISTING
router.post('/', async (req, res) => {
	const newProduct = new Product(req.body)
	console.log(newProduct)
	try {
		const product = await newProduct.save()
		res.status(200).json(product)
	} catch (err) {
		res.status(500).json(err)
	}
})

// UPDATE A PRODUCT LISTING
router.put('/:id', async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).json(updatedProduct)
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE A PRODUCT LISTING
router.delete('/:id', async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id)
		res.status(200).json('Product has been deleted.')
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET A PRODUCT LISTING
router.get('/find/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.status(200).json(product)
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET ALL PRODUCTS OR BY CATEGORY QUERY
router.get('/', async (req, res) => {
	const queryCategory = req.query.category
	try {
		let products
		if (queryCategory) {
			products = await Product.find({
				category: queryCategory,
			})
		} else {
			products = await Product.find()
		}
		res.status(200).json(products)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
