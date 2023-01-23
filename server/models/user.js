const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema({
  id: Number,
  username: String,
  password: String,
  groupLeader: Boolean,
  groupCodes: Array,
  admin: Boolean,
})

module.exports = mongoose.model("User", User)
