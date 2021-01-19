const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "P123456p123456!",
  database: "burgers_db",
});

connection.connect();

module.exports = connection;
