const express = require('express')
const router = express.Router()

const colors = require('colors')

router.post('/', (req, res) => {
	console.log('user route accessed'.gray)
	const user = SESSIONS.get(req.cookies.sessionId)
	console.log(user)

	res.json({
		message: 'verify if user session exists',
		status: user ? true : false,
		username: user ? user.username : 'no session exists',
	})
})

module.exports = router
