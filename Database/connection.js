const mysql = require("mysql2");

// create the connection for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@RaunchyWhale_98",
  database: "employeeTracker",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
