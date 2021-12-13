const mysql = require("mysql");
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_nodejs",
  });
  
  //Init connect
  database.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MySQL Connect success !");
    }
  });


module.exports =database;