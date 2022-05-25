"use strict";
const mysql = require("mysql");
const databse = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "personaldata",
    password: "15feb2021mysql"
});
databse.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("database is conneted");
    }
});
module.exports = databse;
