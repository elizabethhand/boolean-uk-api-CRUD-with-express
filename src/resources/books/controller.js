const Book = require("./model")
const db = require("../utils/database")

Book()

function getBooks(res, req) {
    const getBooksFromsSQL = `
SELECT *
FROM books `


    db.query(getBooksFromSQL)
        .then((result) => res.json({ data: result.rows }))
        .catch(console.error)
}

module.exports = { getBooks }