const express = require('express')
const router = express.Router()
const SESSION_IDS = require('./login')

const colors = require('colors')

// allow router to use json // maybe?
router.use(express.json())

router.post('/', (req, res) => {
	console.log('user route accessed'.gray)
	console.log(req.cookies)
	res.send('hello')
})

module.exports = router
