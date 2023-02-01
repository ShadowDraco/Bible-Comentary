const express = require('express')
const router = express.Router()

const colors = require('colors')
const uuid = require('uuid')

let User = require('../models/user')

const SESSION_IDS = new Map()

async function validateLogin(username, password) {
	let foundUser = await User.findOne({ username: username })
	foundUser ? (validated = true) : (validated = false)

	return validated
}

router.post('/', async (req, res) => {
	console.log('logging in a user'.yellow)

	let loggedUser = validateLogin(req.body.username, req.body.password)
	let sessionId

	if (loggedUser) {
		sessionId = uuid.v4()
		SESSION_IDS.set(sessionId, loggedUser)
		res
			.cookie('sessionId', sessionId, {
				secure: true,
				httpOnly: true,
				sameSite: 'none',
			})
			.json({})
	} else {
		res.json({})
	}
})

module.exports = router
