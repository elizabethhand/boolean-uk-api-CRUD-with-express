const db = require("../utils/database")

function Book() {
    function createBook() {
        const sql = `
        CREATE TABLE IF NOT EXISTS books(
            id SERIAL PRIMARY KEY,
            title VARCHAR(20) NOT NULL,

            UNIQUE(title)
        )
        `
        db.query(sql)
            .then((result) => console.log("Product table ready."))
            .catch(console.error)

    }

    function mockData() {
        const createBook = `
        INSERT INTO books (title)
        VALUES ($1)
        ON CONFLICT(title) DO NOTHING
        `

        db.query(createBook, ["book title"])
        db.query(createBook, ["book title 2"])
    }

    createBook()
    mockData()
}

module.exports = Book