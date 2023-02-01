const express = require('express')
const router = express.Router()

const colors = require('colors')
const uuid = require('uuid')

let User = require('../models/user')

async function validateSignup(username) {
	let foundUser = await User.findOne({ username: username })
	foundUser ? (validated = false) : (validated = true)

	console.log('Validated', validated)
	return validated
}

async function createNewUser(username, password) {
	let signup = new User({
		id: uuid.v4(),
		username: username,
		password: password,
		groupLeader: false,
		groupCodes: {},
		admin: false,
	}).save()

	console.log('signup', signup)
	return signup
}

router.post('/', async (req, res) => {
	console.log('signing up a user'.yellow)

	let newUser

	if (await validateSignup(req.body.username)) {
		newUser = await createNewUser(req.body.username)
	}

	res.json({
		message: 'finished requested sign up',
		username: newUser.username,
		status: newUser ? 'success' : 'username already existed',
	})
})

module.exports = router
