const express = require("express")
const morgan = require("morgan")
const db = require("./src/resources/utils/database")

const booksRouter = require("./src/resources/books/router")

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use("/books/fiction", booksRouter)

app.get("*", (req, res) => {
    res.json({ ok: true })
})

const port = 3000

app.listen(port, () => {
    db.connect((error) => {
        if (error) {
            console.error("Connect error")
        } else {
            console.log("Connected...")
        }
    })
    console.log("Running on server")
})

