const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
	id: String,
	username: String,
	password: String,
	groupLeader: Boolean,
	groupCodes: Array,
	admin: Boolean,
})

module.exports = mongoose.model('User', User)
