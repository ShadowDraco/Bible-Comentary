const express = require('express')
const router = express.Router()

const colors = require('colors')
const uuid = require('uuid')

let Session = require('../models/session')
let User = require('../models/user')

async function validateLogin(username, password, cookie) {
	let foundUser = await User.findOne({ username: username, password: password })
	let foundSession = await Session.findOne({ id: cookie })

	return { foundUser, foundSession }
}

router.post('/', async (req, res) => {
	console.log('logging in a user'.yellow)

	let loggedUser = await validateLogin(
		req.body.username,
		req.body.password,
		req.cookies.session
	)

	if (loggedUser.foundUser && !loggedUser.foundSession) {
		let sessionId
		sessionId = uuid.v4()

		let newSession = await new Session({
			id: sessionId,
			expires: '15 minutes',
			user: req.body.username,
		}).save()

		res
			.cookie('session', sessionId, {
				//secure: true,
				httpOnly: true,
				sameSite: 'lax',
				maxAge: 150,
			})
			.json({
				message: 'finished log in procedure',
				status: 'success! created new session',
				username: req.body.username,
			})
	} else if (loggedUser.foundUser && loggedUser.foundSession) {
		res.json({
			message: 'finished log in procedure',
			status: 'success! user is already logged in',
			username: req.body.username,
		})
	} else {
		res.json({
			message: 'finished log in procedure',
			status: 'username is taken',
		})
	}
})

module.exports = router
