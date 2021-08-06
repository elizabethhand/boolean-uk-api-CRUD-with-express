const express = require("express")

const { getBooks } = require("./controller")

const router = express.Router()

router.get("/books/fiction", getBooks)

module.exports = router