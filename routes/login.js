const express = require('express')
const router = express.Router()

const colors = require('colors')
const uuid = require('uuid')

// session ids for server
const SESSIONS = new Map()

let User = require('../models/user')

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
		SESSIONS.set(sessionId, loggedUser)
		res
			.cookie('sessionId', sessionId, {
				//secure: true,
				httpOnly: true,
				sameSite: 'lax',
				maxAge: 150000,
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
