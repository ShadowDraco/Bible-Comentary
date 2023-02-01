const express = require('express')
const router = express.Router()

const colors = require('colors')

// allow router to use json // maybe?
router.use(express.json())

router.post('/', (req, res) => {
	console.log('user route accessed'.gray)

	console.log(req.body.username, req.cookies)
})

module.exports = router
