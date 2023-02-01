const express = require('express')
const router = express.Router()

const colors = require('colors')
const uuid = require('uuid')

let User = require('../models/user')

const SESSION_IDS = new Map()

async function validateLogin(username, password) {
	let foundUser = await User.findOne({ username: username, password: password })

	return foundUser
}

router.post('/', async (req, res) => {
	console.log('logging in a user'.yellow)

	let loggedUser = await validateLogin(req.body.username, req.body.password)

	if (loggedUser) {
		let sessionId
		sessionId = uuid.v4()
		SESSION_IDS.set(sessionId, loggedUser)
		res
			.cookie('sessionId', sessionId, {
				secure: true,
				httpOnly: true,
				sameSite: 'none',
			})
			.json({
				message: 'finished log in procedure',
				status: 'success!',
				username: req.body.username,
			})
	} else {
		res.json({
			message: 'finished log in procedure',
			status: 'username or password is incorrect!',
		})
	}
})

module.exports = router
