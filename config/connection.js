const mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P123456p123456!",
    database: "zgsj710tboygyu2p",
  });
}

connection.connect();

module.exports = connection;
