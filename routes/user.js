const express = require('express')
const router = express.Router()

const Session = require('../models/session')

router.post('/', async (req, res) => {
	console.log('user route accessed')
	const user = await Session.findOne({ id: req.cookies.session })

	if (user) {
		res
			.cookie('session', req.cookies.session, {
				expires: 150000,
			})
			.json({
				message: 'user session extended',
				status: true,
				username: user.user,
			})
	} else {
		// if there is no session remove session associated with the user's name
		let oldSession = await Session.deleteOne({ user: req.body.username })
		res.json({
			message: 'verify if user session exists, removing sessions from database',
			status: false,
		})
	}
})

module.exports = router
