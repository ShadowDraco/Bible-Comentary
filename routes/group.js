const express = require("express")
const router = express.Router()

const colors = require("colors")

// allow router to use json // maybe?
router.use(express.json())

router.post("/", (req, res) => {
  console.log("group route accessed".blue)
})

module.exports = router
