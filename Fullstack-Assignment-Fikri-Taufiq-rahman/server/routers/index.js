const express = require("express")
const router = express.Router()
const products = require("./product")
const users = require("./user")

router.use(products)
router.use(users)

module.exports = router