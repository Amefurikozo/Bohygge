const router = require('express').Router()
const Store = require('../models/Store')

// CREATE STORE INFO
router.post('/', async (req, res) => {
	const newStore = new Store(req.body)

	try {
		const Store = await newStore.save()
		res.status(200).json(Store)
	} catch (err) {
		res.status(500).json(err)
	}
})

// UPDATE STORE INFO
router.put('/:id', async (req, res) => {
	try {
		const updatedStore = await Store.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).json(updatedStore)
	} catch (err) {
		res.status(500).json(err)
	}
})

// DELETE STORE INFO
router.delete('/:id', async (req, res) => {
	try {
		await Store.findByIdAndDelete(req.params.id)
		res.status(200).json('Store info deleted.')
	} catch (err) {
		res.status(500).json(err)
	}
})

// GET STORE INFO
router.get('/:id', async (req, res) => {
	try {
		const store = await Store.findById(req.params.id)
		res.status(200).json(store)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
