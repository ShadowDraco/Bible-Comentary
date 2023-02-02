const express = require('express')
const router = express.Router()

const Session = require('../models/session')

router.post('/', async (req, res) => {
	console.log('logging out user')
	await Session.findOneAndDelete({ id: req.cookies.session })

	res
		.clearCookie('session')
		.json({ message: 'logout finished', status: 'removed entire session' })
})

module.exports = router
