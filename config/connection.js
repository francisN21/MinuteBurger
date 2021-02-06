const mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "kwub3ggspl4vjzpk",
    password: "tf1ts7399j7853m1",
    database: "zgsj710tboygyu2p",
  });
}

connection.connect();

module.exports = connection;
