const express = require("express")
const router = express.Router()

const colors = require("colors")

let User = require("../models/user")

router.get("/", (req, res) => {
  console.log("sign up sign in accessed")
})

async function validateSignup(username) {
  let validated = await User.findOne({ username: username })
  console.log("Validated", validated)
  return validated
}

async function createNewUser(username, password) {
  let signup = new User({
    id: Math.floor(Math.random(100) * 10) + 1,
    username: req.body.username,
    password: req.body.password,
    groupLeader: false,
    groupCodes: {},
    admin: false,
  })

  console.log("signup", signup)
  return signup
}

router.post("/signup", async (req, res) => {
  console.log("signing up a user".yellow)

  let newUser

  if (validateSignup(req.body.username)) {
    newUser = createNewUser(req.body.username)
  }

  res.json({ message: "finished requested sign up", status: newUser })
})

module.exports = router
