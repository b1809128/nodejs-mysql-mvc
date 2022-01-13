const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./app/routes/home.routes");
const mysqlRouter = require("./app/routes/mysql.routes");
const bookRouter = require("./app/routes/book.routes");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 5000;

/**Su dung middleware */
app.use("/", homeRouter);
app.use("/mysql", mysqlRouter);
app.use("/book", bookRouter);
//INIT SERVER
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
