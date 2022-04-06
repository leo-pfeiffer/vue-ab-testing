const sqlite3 = require('sqlite3').verbose()

const DB_FILE = "db.sqlite"

let db = new sqlite3.Database(DB_FILE, (error) => {
    if (error) {
        // Error opening db
        console.error(error.message)
        throw error
    }
    else{
        console.log('Connected to the SQLite database.')

        const sql = `
        CREATE TABLE experiment (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            variant text, 
            event text
            );
        `
        db.run(sql, (err) => {/* table already exists */});
    }
});

module.exports = db