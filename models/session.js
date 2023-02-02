const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Session = new Schema({
	id: String,
	expires: String,
	user: String,
})

module.exports = mongoose.model('Session', Session)
