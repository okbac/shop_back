const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "shop",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected to the database")
});

module.exports = connection;