const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Group = new Schema({
	name: String,
	code: String,
	users: Array,
	commentary: Array,
})

module.exports = mongoose.model('Group', Group)
